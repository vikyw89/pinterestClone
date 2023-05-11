import { supabase } from '@/lib/supabase'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'
import { PinCommentsComponent } from './pinComments'
import { PinCreatorComponent } from './pinCreator'
import { useRouter } from 'next/router'

export const DetailCardComponent = () => {
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const userId = auth?.data?.user?.id
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = useAsyncV(`pin.${pin_uuid}`)
  const boards = useAsyncV('boards')
  const [selectedBoard, setSelectedBoard] = useState()

  const boardSelectHandler = (e) => {
    setSelectedBoard(JSON.parse(e.target.value))
  }

  useEffect(() => {
    if (boards.data || !userId) return
    setAsyncV('boards', async () => {
      const response = await supabase
        .from('boards')
        .select()
        .eq('creator_uuid', userId)
        .throwOnError()
      const data = response.data
      setSelectedBoard(data)
      return data
    })
  }, [userId, boards.data])

  const saveHandler = () => {

  }

  return (
    <div className="bg-neutral flex flex-wrap text-neutral-content rounded-box items-start">
      {/* left half */}
      <div className="max-w-lg relative">
        {pinDetail.data &&
          <Image
            src={pinDetail.data.image_url}
            alt="pinImage"
            height={0}
            width={0}
            placeholder='blur'
            blurDataURL={pinDetail?.data?.loading_image_url}
            sizes="100vw"
            className="w-screen aspect-auto rounded-l-3xl bg-neutral-focus "
          />
        }
      </div>
      {/* right half */}
      <div className="flex max-w-lg flex-col rounded-r-3xl bg-neutral p-5 gap-1 relative">
        <div className="flex items-center justify-end w-full">
          <button className="btn btn-ghost p-0 btn-circle" >
            <MoreHorizIcon />
          </button>
          <div className="flex-1"></div>
          {selectedBoard &&
            <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
              {boards.data.map((p, i) => {
                return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
              })}
            </select>
          }
          <button onClick={saveHandler} className="btn btn-primary rounded-btn">Save</button>
        </div>
        {pinDetail.data &&
          <div className='w-full'>
            <div className='underline'>
              <a href={pinDetail.data.link_url}>{pinDetail.data.link_url}</a>
            </div>
            <div className="font-bold">
              {pinDetail.data.title}
            </div>
            <div>
              {pinDetail.data.description}
            </div>
          </div>
        }
        <PinCreatorComponent />
        <PinCommentsComponent />
      </div>
    </div>
  )
}