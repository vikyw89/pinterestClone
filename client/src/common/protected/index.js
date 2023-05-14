import { supabase } from '@/lib/supabase'
import { useAsyncSubV, useAsyncV } from 'use-sync-v'

export const ProtectedData = () => {
  const auth = useAsyncV('auth')
  const users = useAsyncSubV('users', async()=>{
    const avatarURL = auth.data.user.user_metadata.avatar_url
    const response = await supabase
      .from('users')
      .update({
        'profile_picture_url':avatarURL
      })
      .eq('uuid', auth.data.user.id)
      .select()
    return response.data[0]
  })
}