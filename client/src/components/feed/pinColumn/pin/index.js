import { useAuth } from '@/lib/hooks/useAuth'
import { useUser } from '@/lib/hooks/useUser'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { SaveButtonComponent } from './saveButton'

const QUEUE_LOWER_LIMIT = 10

export const PinComponent = ({ props }) => {
  const { index, feeds, setPinsToDisplay, refetchFn, infinite } = props
  const { data: auth } = useAuth()
  const fetchedPinsQty = feeds?.length
  const [displayIndex, setDisplayIndex] = useState()
  const pin = feeds?.[displayIndex]
  const router = useRouter()
  const [skip, setSkip] = useState(false)
  const { entry, ref } = useInView({ skip })
  const user = useUser()
  const boards = user?.data?.boards
  const [selectedBoard, setSelectedBoard] = useState()
  const [hover, setHover] = useState(false)
  // increment index on every new component
  useEffect(() => {
    index.current++
    return () => {
      index.current--
    }
  }, [index])

  useEffect(() => {
    setDisplayIndex(index.current)
  }, [])

  useEffect(() => {
    if (entry?.isIntersecting) {
      setPinsToDisplay(p => {
        return [...p, 'dummy']
      })
      setSkip(true)
    }
  }, [entry?.isIntersecting, setPinsToDisplay])

  // refetch when displayIndex is > index
  useEffect(() => {
    if (!displayIndex) return
    if (fetchedPinsQty <= (displayIndex + QUEUE_LOWER_LIMIT)) {
      if (infinite) {
        refetchFn()
      } else {
        setSkip(true)
      }
    }
  }, [displayIndex, fetchedPinsQty, infinite, refetchFn])

  useEffect(() => {
    setSelectedBoard(boards?.[0])
  }, [boards])


  const boardSelectHandler = (e) => {
    e.stopPropagation()
    const selectedBoardData = JSON.parse(e.target.value)
    setSelectedBoard(selectedBoardData)
  }

  const pinClickHandler = (e) => {
    e.currentTarget.classList.add('animate-ping')
    router.push(`/pin/${pin.uuid}`)
  }

  const loadingCompleteHandler = (e) => {
    e.classList.remove('animate-pulse')
    e.removeEventListener('onLoadingComplete', loadingCompleteHandler)
  }

  const hoverHandler = (e) => {
    e.stopPropagation()
    setHover(true)
    e.currentTarget.classList.add('animate-pulse')
  }

  const unHoverHandler = (e) => {
    e.stopPropagation()
    setHover(false)
    e.currentTarget.classList.remove('animate-pulse')
  }
  return (
    <div className="flex flex-col relative gap-1 hover:cursor-zoom-in" onClick={pinClickHandler} ref={ref}>
      {pin &&
        <>
          <div className='w-72 max-w-full h-auto relative'
            onMouseEnter={hoverHandler}
            onMouseLeave={unHoverHandler}>
            <Image
              src={pin.image_url}
              alt="pinImage"
              width={300}
              height={300}
              sizes='300px'
              priority={true}
              placeholder='blur'
              blurDataURL={pin.loading_image_url}
              className="h-auto w-full rounded-3xl bg-neutral animate-pulse"
              onLoadingComplete={loadingCompleteHandler}
            />
            {auth && hover &&
              <div className='absolute p-2 top-0 right-0 left-0 bottom-0 z-20 hover:backdrop-brightness-50 flex justify-between rounded-3xl'>
                <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
                  {boards &&
                    boards.map((p, i) => {
                      return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                    })
                  }
                </select>
                {selectedBoard && <SaveButtonComponent props={{ pin_uuid: pin.uuid, board_uuid: selectedBoard.uuid }} />}
              </div>}
          </div>
          <div className='pl-3 pr-3 font-bold overflow-clip overflow-ellipsis'>
            {pin.title}
          </div>
          <div className="flex max-w-full items-center gap-2 pl-3 pr-3 overflow-clip overflow-ellipsis">
            <div className="avatar aspect-square">
              <div className="w-8 rounded-full flex items-center">
                {pin.users.profile_picture_url
                  ? <Image src={pin.users.profile_picture_url}
                    alt="avatar"
                    width="0"
                    height="0"
                    className="w-full aspect-square"
                    id="profilePicture"
                  />
                  :
                  <AccountCircleIcon className='w-full aspect-square' />
                }
              </div>
            </div>
            <div className="overflow-ellipsis overflow-clip">
              {pin.users.username}
            </div>
          </div>
        </>
      }
      {!pin &&
        <div className='aspect-square w-full animate-ping'></div>
      }
    </div>
  )
}