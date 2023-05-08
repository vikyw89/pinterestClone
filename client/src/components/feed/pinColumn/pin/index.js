import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import { setSyncV, useSyncV } from 'use-sync-v'

export const PinComponent = ({ props }) => {
  const id = useId()
  const [pin, setPin] = useState()
  const fetchedPins = useSyncV('fetchedPins')
  const [displayIndex, setDisplayIndex] = useState()

  // freeze the index
  useEffect(() => {
    setSyncV('index', p => {
      setDisplayIndex(+p)
      return +p + 1
    })
  }, [])

  // update pindata based on index
  useEffect(() => {
    if (fetchedPins.length < displayIndex) return
    if (pin) return
    setPin(fetchedPins[displayIndex])
  }, [fetchedPins, displayIndex, pin])

  useEffect(() => {
    const pin = document.querySelector(`#${CSS.escape(id)}`)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if (!intersecting) return
        props.setPinsToDisplay(p => {
          return [...p, <PinComponent key={p.length} props={{
            setPinsToDisplay: props.setPinsToDisplay
          }} />]
        })
        observer.unobserve(pin)
      })
    }, {
      root: null,
      rootMargin: '1000px',
      threshold: 0
    })
    observer.observe(pin)
    return () => {
      observer.unobserve(pin)
    }
  }, [id, props])

  return (
    <>
      <div id={id} className="flex flex-col relative min-h-16 gap-1">
        {pin &&
          <>
            <Image
              src={pin.image_url}
              alt="pinImage"
              width={0}
              height={0}
              sizes="10vw"
              placeholder='blur'
              blurDataURL='p-logo-lowres.png'
              className="w-auto h-auto rounded-3xl bg-neutral"
            />
            <div className='pl-3 pr-3 font-bold overflow-clip'>
              {pin.title}
            </div>
            <div className="flex max-w-full items-center gap-2 pl-3 pr-3">
              <div className="avatar aspect-square">
                <div className="w-8 rounded-full flex items-center">
                  {pin?.users?.profile_picture_url
                    ? <Image src={pin?.users?.profile_picture_url}
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
      </div>
    </>
  )
}