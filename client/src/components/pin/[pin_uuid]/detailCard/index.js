import { supabase } from '@/lib/supabase'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'
import { PinCommentsComponent } from './pinComments'
import { PinCreatorComponent } from './pinCreator'
import { useRouter } from 'next/router'
import { useAuth } from '@/lib/hooks/useAuth'
import useSWRImmutable from 'swr/immutable'
import { useUser } from '@/lib/hooks/useUser'
import { usePin } from '@/lib/hooks/usePin'

export const DetailCardComponent = () => {
  const auth = useAuth()
  const userId = auth?.data?.user?.id
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinData = usePin(pin_uuid)
  const user = useUser()
  const boards = user?.data?.boards
  const [selectedBoard, setSelectedBoard] = useState()

  const boardSelectHandler = (e) => {
    setSelectedBoard(JSON.parse(e.target.value))
  }

  const saveHandler = () => {

  }

  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-wrap text-neutral-content items-start justify-center">
        {/* left half */}
        <div className="max-w-lg relative rounded-l-3xl bg-neutral-focus">
          {pinData.data &&
              <Image
                src={pinData.data.image_url}
                alt="pinDataImage"
                width={500}
                height={500}
                placeholder='blur'
                blurDataURL={pinData.data.loading_image_url}
                className='rounded-l-3xl'
              />
          }
        </div>
        {/* right half */}
        <div className="max-w-lg flex flex-col rounded-r-3xl bg-neutral p-5 gap-1 w-screen min-h-full">
          <div className="flex items-center justify-end">
            <button className="btn btn-ghost p-0 btn-circle" >
              <MoreHorizIcon />
            </button>
            <div className="flex-1"></div>
            {selectedBoard &&
              <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
                {selectedBoard.map((p, i) => {
                  return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                })}
              </select>
            }
            <button onClick={saveHandler} className="btn btn-primary rounded-btn">Save</button>
          </div>
          {pinData.data &&
            <div className='w-full'>
              <div className='underline'>
                <a href={pinData.data.link_url}>{pinData.data.link_url}</a>
              </div>
              <div className="font-bold">
                {pinData.data.title}
              </div>
              <div>
                {pinData.data.description}
              </div>
            </div>
          }
          <PinCreatorComponent />
          <PinCommentsComponent />
        </div>
      </div>
    </div>
  )
}