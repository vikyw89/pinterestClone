import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { mutate } from "swr"

export const SaveButtonComponent = ({ props }) => {
    const { pin_uuid, board_uuid, setPinIsModified } = props
    const [pinIsSaved, setPinIsSaved] = useState(true)

    const saveHandler = async (e) => {
        e.stopPropagation()
        e.target.classList.add('loading')
        mutate('api/feeds', async () => {
            await supabase
                .rpc('save_pin', {
                    board_uuid: board_uuid,
                    pin_uuid: pin_uuid
                })
                .throwOnError()
            setPinIsSaved(true)
            setPinIsModified(true)
        }, { populateCache: (c, p) => p, revalidate: false })
    }

    const unSaveHandler = (e) => {
        e.stopPropagation()
        e.target.classList.add('loading')
        mutate('api/feeds', async () => {
            await supabase
                .from('boards_pins')
                .delete()
                .eq('pin_uuid', pin_uuid)
                .eq('board_uuid', board_uuid)
            setPinIsSaved(false)
            setPinIsModified(true)
        }, { populateCache: (c, p) => p, revalidate: false })
    }
    return (
        <div >
            {!pinIsSaved &&
                <button className='btn btn-primary' onClick={saveHandler}>
                    Save
                </button>
            }
            {pinIsSaved &&
                <button className='btn btn-primary' onClick={unSaveHandler}>
                    Saved
                </button>
            }
        </div>
    )
}