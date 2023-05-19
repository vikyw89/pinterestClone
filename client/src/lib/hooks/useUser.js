import useSWRImmutable from 'swr/immutable'
import { useAuth } from './useAuth'
import { supabase } from '../supabase'

// all data related to user
export const useUser = () => {
  const auth = useAuth()
  const user = useSWRImmutable(auth?.data?.user?.id && `api/user/${auth.data.user.id}`, async () => {
    const response = await supabase
      .from('users')
      .select(`*,
                          users_followers!users_followers_follower_uuid_fkey(*),
                        boards!boards_creator_uuid_fkey(*, 
                          boards_pins!boards_pins_board_uuid_fkey(*, 
                            pins(*))
                        )
                      `)
      .eq('uuid', auth.data.user.id)
      .throwOnError()

    if (!response.data[0].profile_picture_url) {
      const avatarURL = auth.data.user.user_metadata.avatar_url
      await supabase
        .from('users')
        .update({
          'profile_picture_url': avatarURL
        })
        .eq('uuid', auth.data.user.id)
        .throwOnError()
    }
    return response.data[0]
  })
  return user
}