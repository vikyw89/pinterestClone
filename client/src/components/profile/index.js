import { useAuth } from '@/lib/hooks/useAuth'
import { useUser } from '@/lib/hooks/useUser'
import Image from 'next/image'

export const ProfileComponent = () => {
  const auth = useAuth()
  const user = useUser()
  const following = user?.data?.users_followers
  const username = user?.data?.username
  const avatarURL = auth.data.user.user_metadata.avatar_url

  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col items-center gap-4">
        <div className="max-w-[120px]">
          <Image
            src={avatarURL}
            alt={avatarURL}
            priority={true}
            width={300}
            height={300}
            className="rounded-full aspect-square w-screen border-4 border-dotted border-secondary"
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