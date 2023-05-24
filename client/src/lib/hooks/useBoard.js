import useSWRImmutable from 'swr/immutable'
import { supabase } from '../supabase'
import { useAuth } from './useAuth'

export const useBoard = (board_uuid) => {
  const auth = useAuth()
  const creator_uuid = auth.data?.user?.id
  const board = useSWRImmutable(board_uuid && creator_uuid && `api/board/${board_uuid}}`, async () => {
    if (board_uuid !== 'all pins') {
      const response = await supabase
        .from('boards')
        .select(`*,
                  boards_pins!boards_pins_board_uuid_fkey(
                      pins(*,
                          users(*))),
                  boards_members!boards_members_board_uuid_fkey(*,users(*)),
                  boards_comments!boards_comments_board_uuid_fkey(*)
              `)
        .eq('uuid', board_uuid)
        .throwOnError()
      return response.data[0]
    } else {
      const response = await supabase
        .from('pins')
        .select(`*,
          users(*)
        `)
        .eq('creator_uuid', creator_uuid)
        .throwOnError()
      return response.data
    }
  })
  return board
}