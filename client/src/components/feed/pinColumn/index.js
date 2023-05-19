import { useEffect, useState } from 'react'
import { PinComponent } from './pin'
import { v4 } from 'uuid'

export const PinColumnComponent = ({ props }) => {
  const [pinsToDisplay, setPinsToDisplay] = useState([])

  useEffect(() => {
    setPinsToDisplay([
      <PinComponent key={v4()} props={{
        ...props,
        setPinsToDisplay: setPinsToDisplay,
      }} />,
    ])
  }, [])
  return (
    <div className="h-max flex flex-col gap-5 w-72 overflow-hidden">
      {pinsToDisplay}
    </div>
  )
}