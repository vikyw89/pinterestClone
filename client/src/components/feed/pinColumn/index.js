import { useEffect, useState } from 'react'
import { PinComponent } from './pin'
import { v4 } from 'uuid'

export const PinColumnComponent = () => {
  const [pinsToDisplay, setPinsToDisplay] = useState([])

  useEffect(() => {
    setPinsToDisplay([<PinComponent key={v4()} props={{
      setPinsToDisplay: setPinsToDisplay,
    }} />])
  }, [])
  return (
    <div className="h-max flex flex-col gap-5 w-72">
      {pinsToDisplay}
    </div>
  )
}