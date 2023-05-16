import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useId, useRef, useState } from 'react'
import { setSyncV, useSyncV } from 'use-sync-v'
import { v4 } from 'uuid'

export const PinComponent = ({ props }) => {
  const id = useId()
  const [pin, setPin] = useState()
  const fetchedPins = useSyncV('fetchedPins')
  const selector = `displayIndex.${id}`
  const displayIndex = useSyncV(selector)
  const router = useRouter()
  const element = useRef(null)

  // freeze the index
  useEffect(() => {
    setSyncV('index', p => {
      setSyncV(selector, p)
      return p + 1
    })
    return () => {
      setSyncV('index', p => {
        setSyncV(selector)
        return p - 1
      })
    }
  }, [])

  // update pindata based on index
  useEffect(() => {
    if (fetchedPins.length < displayIndex) return
    if (pin) return
    setPin(fetchedPins[displayIndex])
  }, [fetchedPins, displayIndex, pin])

  useEffect(() => {
    const pin = element.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if (!intersecting) return
        props.setPinsToDisplay(p => {
          return [...p, <PinComponent key={v4()} props={{
            setPinsToDisplay: props.setPinsToDisplay
          }} />]
        })
        observer.unobserve(pin)
      })
    }, {
      root: null,
      rootMargin: '1000px'
    })
    observer.observe(pin)
    return () => {
      observer.unobserve(pin)
    }
  }, [id, props])

  const pinClickHandler = () => {
    router.push(`/pin/${pin.uuid}`)
  }
  return (
    <>
      <div id={id} className="flex flex-col relative gap-1" onClick={pinClickHandler} ref={element}>
        {pin &&
          <>
            <div>
              <Image
                src={pin.image_url}
                alt="pinImage"
                width={500}
                height={500}
                placeholder='blur'
                blurDataURL={pin.loading_image_url}
                className="h-auto w-full rounded-3xl bg-neutral"
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
          <div className='aspect-square w-full'></div>
        }
      </div>
    </>
  )
}