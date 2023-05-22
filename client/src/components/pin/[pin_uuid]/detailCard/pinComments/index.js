import { usePin } from '@/lib/hooks/usePin'
import { useUser } from '@/lib/hooks/useUser'
import { supabase } from '@/lib/supabase'
import SendIcon from '@mui/icons-material/Send'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { mutate } from 'swr'
import { CommentComponent } from './comment'


export const PinCommentsComponent = () => {
  const user = useUser()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = usePin(pin_uuid)
  const { isLoading, isValidating } = pinDetail
  const [commentInput, setCommentInput] = useState('')
  const pin_comments = pinDetail?.data?.pins_comments
  const avatarURL = user?.data?.profile_picture_url
  const user_uuid = user?.data?.uuid

  const commentInputHandler = (e) => {
    setCommentInput(e.target.value)
  }

  const sendCommentHandler = async () => {
    if (!commentInput || !user_uuid || !pin_uuid) return
    setCommentInput('')
    mutate(`api/pin/${pin_uuid}`, async () => {
      await supabase
        .from('pins_comments')
        .insert({
          'comment': commentInput,
          'creator_uuid': user_uuid,
          'pin_uuid': pin_uuid
        })
        .throwOnError()
    }, { populateCache: false })
  }


  return (
    <>
      <div className="flex-1">
        <div className="font-bold">
          Comments
        </div>
        {pin_comments &&
          <div>
            {pin_comments.map((e, i) => {
              return (
                <CommentComponent key={i} props={e}/>
              )
            })}
          </div>
        }
        {!pin_comments && <div>
          No comments yet! Add one to start the conversation.
        </div>}
      </div>
      <Divider />
      <div className="flex gap-2 justify-between">
        {avatarURL && <Image src={avatarURL}
          alt="avatar"
          height={0}
          width={0}
          sizes="100vw"
          className="w-12 aspect-square rounded-box"
        />}
        <input type="text"
          placeholder="Add a comment"
          className="input input-bordered input-primary rounded-box bg-neutral-focus w-full"
          onChange={commentInputHandler}
          value={commentInput} />
        {(isLoading || isValidating)
          ?
          <button className="btn btn-primary rounded-btn btn-circle loading">
          </button>
          :
          <button className="btn btn-primary rounded-btn btn-circle" onClick={sendCommentHandler}>
            <SendIcon />
          </button>
        }
      </div>
    </>
  )
}