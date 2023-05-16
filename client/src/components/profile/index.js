import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useEffect } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'

export const ProfileComponent = () => {
  const auth = useAsyncV('auth')
  const userUUID = auth.data.user.id
  const userData = useAsyncV('userData')
  const following = userData?.data?.users_followers
  //   const firstName = userData?.data?.first_name
  //   const lastName = userData?.data?.last_name
  const username = userData?.data?.username
  useEffect(() => {
    setAsyncV('userData', async () => {
      const response = await supabase
        .from('users')
        .select(`*,
                    users_followers!users_followers_follower_uuid_fkey(*)
                `)
        .eq('uuid', userUUID)
        .throwOnError()
      const data = response.data[0]
      return data
    })
  }, [userUUID])
  const avatarURL = auth.data.user.user_metadata.avatar_url
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col items-center gap-4">
        <div className="max-w-[120px]">
          <Image
            src={avatarURL}
            alt={avatarURL}
            width={500}
            height={500}
            className="rounded-full aspect-square w-screen"
          />
        </div>
        {username &&
                    <div className="font-bold text-2xl">
                      {username}
                    </div>
        }
        {following &&
                    <div className='font-bold'>
                      {following.length} following
                    </div>
        }
        <div className='flex gap-5'>
          <button className='btn btn-primary rounded-btn'>
                        Share
          </button>
          <button className='btn btn-primary rounded-btn'>
                        Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}