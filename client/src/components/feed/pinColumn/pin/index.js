import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useId, useRef, useState } from 'react'
import { asyncRefetchV, setSyncV, useSyncV } from 'use-sync-v'

const QUEUE_LOWER_LIMIT = 50

export const PinComponent = ({ props }) => {
  const id = useId()
  const [displayIndex, setDisplayIndex] = useState()
  const pin = useSyncV(`pins[${displayIndex}]`)
  const fetchedPins = useSyncV('pins')
  const fetchedPinsQty = fetchedPins.length
  const router = useRouter()
  const element = useRef(null)

  // freeze the index
  useEffect(() => {
    setSyncV('index', p => {
      setDisplayIndex(p)
      return p + 1
    })
    return () => {
      setSyncV('index', p => {
        setDisplayIndex()
        return p - 1
      })
    }
  }, [])

  useEffect(() => {
    if (fetchedPinsQty <= (displayIndex ?? 0 + QUEUE_LOWER_LIMIT)) {
      asyncRefetchV('pins')
    }
  }, [displayIndex, fetchedPinsQty])

  useEffect(() => {
    const thisPin = element.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if (!intersecting) return
        props.setPinsToDisplay(p => {
          return [
            ...p,
            <PinComponent key={p.length} props={{
              setPinsToDisplay: props.setPinsToDisplay
            }} />,
          ]
        })
        observer.unobserve(thisPin)
      })
    })
    observer.observe(thisPin)
    return () => {
      observer.unobserve(thisPin)
    }
  }, [props])

  const pinClickHandler = () => {
    router.push(`/pin/${pin.uuid}`)
  }
  const loadingCompleteHandler = (e) => {
    e.classList.remove('animate-pulse')
    e.removeEventListener('onLoadingComplete', loadingCompleteHandler)
  }
  return (
    <div id={id} className="flex flex-col relative gap-1" onClick={pinClickHandler} ref={element}>
      {pin &&
        <>
          <div className='w-72 h-auto'>
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