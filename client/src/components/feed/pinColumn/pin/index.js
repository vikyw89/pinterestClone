import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const QUEUE_LOWER_LIMIT = 10


export const PinComponent = ({ props }) => {
  const { index, feeds, setPinsToDisplay, refetchFn, infinite } = props
  const [displayIndex, setDisplayIndex] = useState()
  const pin = feeds?.[displayIndex]
  const fetchedPinsQty = feeds?.length
  const router = useRouter()
  const [skip, setSkip] = useState(false)
  const { inView, entry, ref } = useInView({ skip })

  useEffect(() => {
    if (inView && entry?.isIntersecting) {
      if (infinite || fetchedPinsQty >= index.current) {
        setPinsToDisplay(p => {
          return [...p, 'dummy']
        })
      }
      setSkip(true)
      setDisplayIndex(++index.current)
    }
  }, [inView, entry?.isIntersecting, setPinsToDisplay, fetchedPinsQty, index, infinite])

  useEffect(() => {
    if (!displayIndex) return
    if (fetchedPinsQty <= (displayIndex + QUEUE_LOWER_LIMIT)) {
      if (infinite) {
        refetchFn()
      }
    }
  }, [displayIndex, fetchedPinsQty, infinite, refetchFn])

  const pinClickHandler = () => {
    router.push(`/pin/${pin.uuid}`)
  }

  const loadingCompleteHandler = (e) => {
    e.classList.remove('animate-pulse')
    e.removeEventListener('onLoadingComplete', loadingCompleteHandler)
  }

  return (
    <div className="flex flex-col relative gap-1" onClick={pinClickHandler} ref={ref}>
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
            {pin.title}{displayIndex}
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