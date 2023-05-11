import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { setAsyncV, setSyncV, useAsyncV } from 'use-sync-v'

export const PinCreatorComponent = () => {
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = useAsyncV(`pin${pin_uuid}`)
  const isFollower = useAsyncV('isFollower')
  const creator_uuid = pinDetail?.data?.users?.uuid
  const user_uuid = auth?.data?.user?.id

  useEffect(() => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    setAsyncV('isFollower', async () => {
      const response = await supabase
        .from('users_followers')
        .select('count')
        .eq('user_uuid', creator_uuid)
        .eq('follower_uuid', user_uuid)
        .throwOnError()
      const data = response.data[0].count === 0 ? false : true
      return data
    }, { deleteExistingData: false })
  }, [pinDetail.data, creator_uuid, user_uuid])

  const followHandler = () => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
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
      return data
    })
    setSyncV('isFollower.data', true)
    setSyncV(`pin${pin_uuid}.data.users.users_followers[0].count`, p => p + 1)
  }

  const unfollowHandler = () => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    setAsyncV('unfollowUser', async () => {
      const response = await supabase
        .from('users_followers')
        .delete()
        .eq('user_uuid', creator_uuid)
        .eq('follower_uuid', user_uuid)
        .select()
        .throwOnError()
      const data = response
      return data
    })
    setSyncV('isFollower.data', false)
    setSyncV(`pin${pin_uuid}.data.users.users_followers[0].count`, p => p - 1)
  }

  return (
    <div className="flex gap-3 w-full flex-wrap">
      {pinDetail.data &&
        <Image
          src={pinDetail.data.users.profile_picture_url}
          alt="pfp"
          height={0}
          width={0}
          sizes="100vw"
          className="w-12 aspect-square rounded-full"
        />}
      {pinDetail.data &&
        <div>
          <div className="font-bold">
            {pinDetail.data.users.username}
          </div>
          <div>
            {pinDetail.data.users.users_followers[0].count} followers
          </div>
        </div>
      }
      <div className="flex-1 text-right">
        {isFollower.data
          ?
          <button className="btn btn-primary text-primary-content rounded-btn max-sm:w-full" onClick={unfollowHandler}>
            Following
          </button>
          :
          <button className="btn btn-primary text-primary-content rounded-btn max-sm:w-full" onClick={followHandler}>
            Follow
          </button>
        }
      </div>
    </div>
  )
}