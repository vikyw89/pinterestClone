import useSWRImmutable from 'swr/immutable'
import { supabase } from '../supabase'

export const useBoard = (board_uuid) => {
  const board = useSWRImmutable(board_uuid && `api/board/${board_uuid}}`, async () => {
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
  })
  return board
}