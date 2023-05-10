import { supabase } from '@/lib/supabase'
import SendIcon from '@mui/icons-material/Send'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'


export const PinCommentsComponent = () => {
    const auth = useAsyncV('auth', { initialState: { loading: true } })
    const avatarURL = auth.data.user.user_metadata.avatar_url
    const pinDetail = useAsyncV('pinDetail')
    const pin_comments = pinDetail.data.pins_comments
    const [commentInput, setCommentInput] = useState('')

    const commentInputHandler = (e) => {
        setCommentInput(e.target.value)
    }

    const sendCommentHandler = () => {
        if (!auth.data) return
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
            await setAsyncV('pinDetail', async () => {
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
            })
            return data
        })
        setCommentInput('')
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
                                <div key={i} className="flex max-h-full gap-2 p-2">
                                    <Image
                                        src={e.users.profile_picture_url}
                                        alt="profile_picture"
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        className="w-8 h-8 aspect-square rounded-full"
                                    />
                                    <div className="flex flex-wrap w-full">
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