import { useEffect, useState } from 'react'
import { PinComponent } from './pin'

export const PinColumnComponent = ({ props }) => {
  const [pinsToDisplay, setPinsToDisplay] = useState()
  useEffect(() => {
    setPinsToDisplay(['dummy'])
    return () => {
      setPinsToDisplay()
    }
  }, [])
  return (
    <div className="h-max flex flex-col gap-5 w-72 overflow-hidden">
      {pinsToDisplay &&
        pinsToDisplay.map((e, i) => {
          return (
            <PinComponent key={i} props={{ ...props, setPinsToDisplay }} />
          )
        })
      }
    </div>
  )
}