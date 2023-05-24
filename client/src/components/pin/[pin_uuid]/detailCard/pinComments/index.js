import { usePin } from '@/lib/hooks/usePin'
import { useUser } from '@/lib/hooks/useUser'
import { supabase } from '@/lib/supabase'
import SendIcon from '@mui/icons-material/Send'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { mutate } from 'swr'
import { CommentComponent } from './comment'

export const PinCommentsComponent = () => {
  const user = useUser()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = usePin(pin_uuid)
  const [commentInput, setCommentInput] = useState('')
  const pin_comments = pinDetail?.data?.pins_comments
  const avatarURL = user?.data?.profile_picture_url
  const user_uuid = user?.data?.uuid
  const sendButton = useRef(null)

  const commentInputHandler = (e) => {
    setCommentInput(e.target.value)
  }

  const sendCommentHandler = async () => {
    if (!commentInput || !user_uuid || !pin_uuid) return
    setCommentInput('')
    sendButton.current.classList.add('animate-ping', 'btn-disabled')
    await mutate(`api/pin/${pin_uuid}`, async () => {
      await supabase
        .from('pins_comments')
        .insert({
          'comment': commentInput,
          'creator_uuid': user_uuid,
          'pin_uuid': pin_uuid
        })
        .throwOnError()
    }, { populateCache: false })
    sendButton.current.classList.remove('animate-ping', 'btn-disabled')
  }

  return (
    <>
      <div className="flex-1">
        <div className="font-bold">
          Comments
        </div>
        {pin_comments &&
          <div>
            {pin_comments.map((e) => {
              return (
                <CommentComponent key={e.uuid} props={e} />
              )
            })}
            {pin_comments.length === 0 &&
              <div>
                No comments yet! Add one to start the conversation.
              </div>
            }
          </div>
        }
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

        <button className="btn btn-primary rounded-btn btn-circle" onClick={sendCommentHandler} ref={sendButton}>
          <SendIcon />
        </button>

      </div>
    </>
  )
}