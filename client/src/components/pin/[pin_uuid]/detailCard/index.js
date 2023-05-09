import { setAsyncV, setSyncV, useAsyncV } from 'use-sync-v'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Divider } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export const DetailCardComponent = () => {
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const avatarURL = auth.data.user.user_metadata.avatar_url
  const pinDetail = useAsyncV('pinDetail')
  const boards = useAsyncV('boards')
  const isFollower = useAsyncV('isFollower')
  const creator_uuid = pinDetail.data.users.uuid
  const user_uuid = auth.data.user.id
  const pin_uuid = pinDetail.data.uuid
  const pin_comments = pinDetail.data.pins_comments
  const [commentInput, setCommentInput] = useState('')
  const [selectedBoard, setSelectedBoard] = useState()

  const boardSelectHandler = (e) => {
    setSelectedBoard(JSON.parse(e.target.value))
  }

  useEffect(() => {
    if (boards.data) return
    setAsyncV('boards', async () => {
      const response = await supabase
        .from('boards')
        .select()
        .filter('creator_uuid', 'eq', auth.data.user.id)
        .throwOnError()
      const data = response.data
      setSelectedBoard(data)
      return data
    })
  }, [])

  const saveHandler = () => {

  }

  useEffect(() => {
    if (!auth.data) return
    setAsyncV('boards', async () => {
      const response = await supabase
        .from('boards')
        .select()
        .filter('creator_uuid', 'eq', auth.data.user.id)
        .throwOnError()
      return response.data
    })
  }, [auth.data])

  useEffect(() => {
    if (!auth.data) return
    setAsyncV('isFollower', async () => {
      const response = await supabase
        .from('users_followers')
        .select('count')
        .eq('user_uuid', creator_uuid)
        .eq('follower_uuid', user_uuid)
        .throwOnError()
      const data = response.data[0].count === 0 ? false : true
      return data
    })
  }, [])

  const followHandler = () => {
    if (!auth.data) return
    setAsyncV('followUser', async () => {
      const response = await supabase
        .from('users_followers')
        .upsert({
          'user_uuid': creator_uuid,
          'follower_uuid': user_uuid
        })
        .select()
        .throwOnError()
      const data = response.data[0]
      setSyncV('isFollower.data', true)
      setSyncV('pinDetail.data.users.users_followers[0].count', p => p + 1)
      return data
    })
  }

  const unfollowHandler = () => {
    if (!auth.data) return
    setAsyncV('unfollowUser', async () => {
      const response = await supabase
        .from('users_followers')
        .delete()
        .eq('user_uuid', creator_uuid)
        .eq('follower_uuid', user_uuid)
        .select()
      const data = response
      setSyncV('isFollower.data', false)
      setSyncV('pinDetail.data.users.users_followers[0].count', p => p - 1)
      return data
    })
  }

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
      const data = response.data[0]
      // TODO: sync client comments model
      // setSyncV('pinDetail.data.pins_comments', p => {
      //     return [...p, { comment: commentInput }]
      // })
      return data
    })
    setCommentInput('')
  }

  return (
    <div className="bg-neutral rounded-3xl flex flex-wrap text-neutral-content justify-center h-fit">
      <div className="max-w-[500px]">
        <Image
          src={pinDetail.data.image_url}
          alt="pinImage"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[500px] aspect-auto rounded-l-3xl bg-neutral-focus flex"
        />
      </div>
      <div className="flex max-w-[500px] flex-col rounded-r-3xl bg-neutral p-5 gap-1 justify-between relative">
        <div className="flex items-center justify-end">
          <button className="btn btn-ghost" >
            <MoreHorizIcon />
          </button>
          <div className="flex-1"></div>
          {selectedBoard &&
                        <select className="select max-w-xs bg-neutral text-neutral-content" value={selectedBoard} onChange={boardSelectHandler}>
                          {boards.data &&
                                boards.data.map((p, i) => {
                                  return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                                })
                          }
                        </select>
          }
          <button onClick={saveHandler} className="btn btn-primary rounded-full">Save</button>
        </div>
        <div>
          <p>{pinDetail.data.link_url}</p>
        </div>
        <div className="font-bold">
          {pinDetail.data.title}
        </div>
        <div>
          {pinDetail.data.description}
        </div>
        <div className="flex gap-2">
          <Image
            src={pinDetail.data.users.profile_picture_url}
            alt="pfp"
            height={0}
            width={0}
            sizes="100vw"
            className="w-12 aspect-square rounded-full"
          />
          <div>
            <div className="font-bold">
              {pinDetail.data.users.username}
            </div>
            <div>
              {pinDetail.data.users.users_followers[0].count} followers
            </div>
          </div>
          <div className="flex-1 text-right">
            {isFollower.data
              ?
              <button className="btn btn-primary text-primary-content rounded-full" onClick={unfollowHandler}>
                                Following
              </button>
              :
              <button className="btn btn-primary text-primary-content rounded-full" onClick={followHandler}>
                                Follow
              </button>
            }
          </div>
        </div>
        <div className="flex-1">
          <div className="font-bold">
                        Comments
          </div>
          {pin_comments &&
                        <div>
                          {pin_comments.map((e, i) => {
                            return (
                              <div key={i} className="flex max-h-full gap-2 p-2">
                                {/* <div className="w-7"> */}
                                <Image
                                  src={e.users.profile_picture_url}
                                  alt="profile_picture"
                                  height={0}
                                  width={0}
                                  sizes="100vw"
                                  className="w-8 h-8 aspect-square rounded-full"
                                />
                                {/* </div> */}
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
        <div className="flex gap-2 w-full justify-between">
          {avatarURL && <Image src={avatarURL}
            alt="avatar"
            height={0}
            width={0}
            sizes="100vw"
            className="w-12 aspect-square rounded-full"
          />}
          <input type="text"
            placeholder="Add a comment"
            className="input input-bordered input-primary rounded-full bg-neutral-focus flex-1"
            onChange={commentInputHandler}
            value={commentInput} />
          <button className="btn btn-primary rounded-full" onClick={sendCommentHandler}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  )
}