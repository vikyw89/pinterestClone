import { usePin } from '@/lib/hooks/usePin'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PinCommentsComponent } from './pinComments'
import { PinCreatorComponent } from './pinCreator'
import { SaveButtonComponent } from '@/components/feed/pinColumn/pin/saveButton'
import { useUser } from '@/lib/hooks/useUser'

export const DetailCardComponent = () => {
  const [pinIsModified, setPinIsModified] = useState(false)
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinData = usePin(pin_uuid)
  const user = useUser()
  const boards = user?.data?.boards
  useEffect(() => {
    setSelectedBoard(boards?.[0])
  }, [boards])
  const [selectedBoard, setSelectedBoard] = useState()

  const boardSelectHandler = (e) => {
    setSelectedBoard(JSON.parse(e.target.value))
  }

  const loadingCompleteHandler = (e) => {
    e.classList.remove('animate-pulse')
    e.removeEventListener('onLoadingComplete', loadingCompleteHandler)
  }

  return (
    <div className="flex justify-center p-5 overflow-x-hidden">
      <div className="flex flex-wrap text-neutral-content items-start justify-center">
        {/* left half */}
        <div className="max-w-lg relative rounded-l-3xl bg-neutral-focus">
          {pinData.data
            ?
            <Image
              src={pinData.data.image_url}
              alt="pinDataImage"
              width={500}
              height={500}
              placeholder='blur'
              blurDataURL={pinData.data.loading_image_url}
              style={{
                height: 'auto'
              }}
              className='rounded-l-3xl w-screen animate-pulse'
              onLoadingComplete={loadingCompleteHandler}
            />
            :
            <div className='w-screen max-w-lg aspect-square animate-ping bg-neutral-focus rounded-l-3xl flex justify-center items-center'>
            </div>
          }
        </div>
        {/* right half */}
        <div className="max-w-lg flex flex-col rounded-r-3xl bg-neutral p-5 gap-1 w-screen lg:min-h-full">
          <div className="flex items-center justify-end">
            <button className="btn btn-ghost p-0 btn-circle" >
              <MoreHorizIcon />
            </button>
            <div className="flex-1"></div>
            {boards &&
              <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
                {boards.map((p, i) => {
                  return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                })}
              </select>
            }
            {pin_uuid && selectedBoard && <SaveButtonComponent props={{ pin_uuid: pin_uuid, board_uuid: selectedBoard.uuid, pinIsModified, setPinIsModified }} />}
          </div>
          {pinData.data &&
            <div className='w-full overflow-clip break-all'>
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