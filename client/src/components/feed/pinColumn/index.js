import { useEffect, useState } from 'react'
import { PinComponent } from './pin'
import { v4 } from 'uuid'

export const PinColumnComponent = ({ props }) => {
  const [pinsToDisplay, setPinsToDisplay] = useState([])
  useEffect(() => {
    setPinsToDisplay(['dummy'])
  }, [])
  return (
    <div className="h-max flex flex-col gap-5 w-72 overflow-hidden">
      {pinsToDisplay.map((e,i) => {
        return (
          <PinComponent key={i} props={{ ...props, setPinsToDisplay }} />
        )
      })}
    </div>
  )
}