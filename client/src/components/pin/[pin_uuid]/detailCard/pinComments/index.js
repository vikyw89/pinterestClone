import { useAuth } from '@/lib/hooks/useAuth'
import { supabase } from '@/lib/supabase'
import SendIcon from '@mui/icons-material/Send'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'


export const PinCommentsComponent = () => {
  const auth = useAuth()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = useAsyncV(`pin${pin_uuid}`)
  const sendComment = useAsyncV('sendComment')
  const [commentInput, setCommentInput] = useState('')
  const pin_comments = pinDetail?.data?.pins_comments
  const avatarURL = auth?.data?.user?.user_metadata?.avatar_url
  const user_uuid = auth?.data?.user.id

  const commentInputHandler = (e) => {
    setCommentInput(e.target.value)
  }

  const sendCommentHandler = () => {
    if (!commentInput || !user_uuid || !pin_uuid) return
    setAsyncV('sendComment', async () => {
      const response = await supabase
        .from('pins_comments')
        .insert({
          'comment': commentInput,
          'creator_uuid': user_uuid,
          'pin_uuid': pin_uuid
        })
        .select()
        .throwOnError()
      const data = response.data[0]
      // TODO: sync client comments model
      setCommentInput('')
      return data
    })
  }

  useEffect(() => {
    if (!sendComment.data || !pin_uuid) return
    setAsyncV(`pin${pin_uuid}`, async () => {
      const response = await supabase
        .from('pins')
        .select(`
                    *,
                    users(*,users_followers!users_followers_user_uuid_fkey(count)),
                    pins_comments(*,users(*))
                    `)
        .eq('uuid', pin_uuid)
        .eq('pins_comments.pin_uuid', pin_uuid)
        .throwOnError()
      const pinData = response.data[0]
      return pinData
    }, { deleteExistingData: false })
  }, [sendComment.data, pin_uuid])
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
                <div key={i} className="flex gap-2 p-2 w-full max-w-lg">
                  <Image
                    src={e.users.profile_picture_url}
                    alt="profile_picture"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-8 h-8 aspect-square rounded-full"
                  />
                  <div className="flex w-full max-w-lg flex-wrap">
                    <span className="font-bold">{e.users.username} :&nbsp;&nbsp;</span>
                    <p className="break-all">{e.comment}</p>
                  </div>
                </div>

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
        <button className="btn btn-primary rounded-btn btn-circle" onClick={sendCommentHandler}>
          <SendIcon />
        </button>
      </div>
    </>
  )
}