import { useUser } from '@/lib/hooks/useUser'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { mutate } from 'swr'

export const SaveButtonComponent = ({ props }) => {
  const { pin_uuid, board_uuid } = props
  const user = useUser()
  const boards = user?.data?.boards
  const [selectedBoard, setSelectedBoard] = useState()
  const [pinIsSaved, setPinIsSaved] = useState()

  useEffect(() => {
    setSelectedBoard(boards?.[0])
  }, [boards])

  useEffect(() => {
    if (!selectedBoard) return
    setPinIsSaved(selectedBoard.boards_pins.filter(e => {
      return e.pin_uuid === pin_uuid
    }).length !== 0)
  }, [selectedBoard, pin_uuid])

  const saveHandler = async (e) => {
    e.stopPropagation()
    e.currentTarget.classList.add('loading', 'animate-pulse')
    await mutate(`api/user/${user.data.uuid}`, async () => {
      await supabase
        .rpc('save_pin', {
          board_uuid: board_uuid,
          pin_uuid: pin_uuid
        })
        .throwOnError()
    }, { populateCache: false })
  }

  const unSaveHandler = async (e) => {
    e.stopPropagation()
    e.currentTarget.classList.add('loading', 'animate-pulse')
    await mutate(`api/user/${user.data.uuid}`, async () => {
      await supabase
        .from('boards_pins')
        .delete()
        .eq('pin_uuid', pin_uuid)
        .eq('board_uuid', board_uuid)
    }, { populateCache: false })
  }
  return (
    <div >
      {typeof pinIsSaved === 'undefined' &&
        <button className='btn btn-info loading'>
          Loading
        </button>
      }
      {pinIsSaved === true &&
        <button className='btn btn-info' onClick={unSaveHandler}>
          Saved
        </button>
      }
      {pinIsSaved === false &&
        <button className='btn btn-accent' onClick={saveHandler}>
          Save
        </button>
      }
    </div>
  )
}