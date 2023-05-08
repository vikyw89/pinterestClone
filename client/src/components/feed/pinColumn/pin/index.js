import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import { setSyncV, useAsyncV, useSyncV } from 'use-sync-v'

export const PinComponent = ({ props }) => {
  const { data: auth } = useAsyncV('auth')
  const username = auth?.user?.user_metadata?.email
  const avatarURL = auth?.user?.user_metadata?.avatar_url
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
    })
    observer.observe(pin)
    return () => {
      observer.unobserve(pin)
    }
  }, [id, props])

  return (
    <>
      <div id={id} className="flex flex-col relative min-h-16">
        {pin &&
                    <>
                      <Image
                        src={pin.image_url}
                        alt="pinImage"
                        placeholder='blur'
                        blurDataURL='../p-logo-lowres.png'
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-3xl"
                      />
                      <div className='pl-3 pr-3 font-bold overflow-clip'>
                        {displayIndex && displayIndex}
                      </div>
                      <div className="flex max-w-full items-center gap-2 pl-3 pr-3">
                        <div className="avatar aspect-square">
                          <div className="w-8 rounded-full flex items-center">
                            {avatarURL && <Image src={avatarURL}
                              alt="avatar"
                              width="0"
                              height="0"
                              className="w-full h-auto"
                              id="pinImageURL"
                            />}
                            <AccountCircleIcon className='text-3xl' />
                          </div>
                        </div>
                        <div>
                          {username}
                        </div>
                      </div>
                    </>
        }
      </div>
    </>
  )
}