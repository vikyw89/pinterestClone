import useSWRImmutable from 'swr/immutable'
import { useAuth } from './useAuth'
import { supabase } from '../supabase'

export const useBoards = () => {
  const auth = useAuth()
  const boards = useSWRImmutable(auth.data && 'boards', async () => {
    const response = await supabase
      .from('boards')
      .select()
      .filter('creator_uuid', 'eq', auth.data.user.id)
      .throwOnError()
    return response.data
  })
  return boards
}