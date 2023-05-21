import { useUser } from '@/lib/hooks/useUser'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const QUEUE_LOWER_LIMIT = 10

export const PinComponent = ({ props }) => {
  const { index, feeds, setPinsToDisplay, refetchFn, infinite } = props

  // increment index on every new component
  useEffect(() => {
    index.current++
    return () => {
      index.current--
    }
  }, [index])

  const fetchedPinsQty = feeds?.length
  const [displayIndex, setDisplayIndex] = useState()
  useEffect(() => {
    setDisplayIndex(index.current)
  }, [])
  const pin = feeds?.[displayIndex]
  const router = useRouter()

  const [skip, setSkip] = useState(false)
  const { entry, ref } = useInView({ skip })
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

  const user = useUser()
  const boards = user?.data?.boards
  const [selectedBoard, setSelectedBoard] = useState(boards?.[0])
  const boardSelectHandler = (e) => {
    setSelectedBoard(JSON.parse(e.target.value))
  }

  const pinClickHandler = () => {
    router.push(`/pin/${pin.uuid}`)
  }

  const loadingCompleteHandler = (e) => {
    e.classList.remove('animate-pulse')
    e.removeEventListener('onLoadingComplete', loadingCompleteHandler)
  }

  const saveHandler = (e) => {

  }
  return (
    <div className="flex flex-col relative gap-1 hover:cursor-zoom-in" onClick={pinClickHandler} ref={ref}>
      {pin &&
        <>
          <div className='w-72 h-auto relative'>
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
            <div className='absolute p-2 top-0 right-0 left-0 bottom-0 z-50 opacity-0 hover:opacity-100  hover:backdrop-brightness-50 flex justify-between'>
              <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
                {boards &&
                  boards.map((p, i) => {
                    return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                  })
                }
              </select>
              <div >
                <button className='btn btn-primary'>
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className='pl-3 pr-3 font-bold overflow-clip'>
            {pin.title}
          </div>
          <div className="flex max-w-full items-center gap-2 pl-3 pr-3">
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
            <div>
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