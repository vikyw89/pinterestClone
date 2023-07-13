import useSWR from 'swr'
import { supabase } from '../supabase'

export const usePin = (uuid) => {
  const pinData = useSWR(uuid && `api/pin/${uuid}`, async () => {
    const response = await supabase
      .from('pins')
      .select(`
              *,
              users(*,
                users_followers!users_followers_user_uuid_fkey(count)),
              pins_comments(*,users(*))
              `)
      .eq('uuid', uuid)
      .eq('pins_comments.pin_uuid', uuid)
      // .throwOnError()
    const pinData = response.data[0]
    return pinData
  })
  return pinData
}