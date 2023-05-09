import { useEffect, useState } from 'react'
import { PinComponent } from './pin'

export const PinColumnComponent = () => {
  const [pinsToDisplay, setPinsToDisplay] = useState([])

  useEffect(() => {
    setPinsToDisplay([<PinComponent key={0} props={{
      setPinsToDisplay: setPinsToDisplay,
    }} />])
  }, [])
  return (
    <div className="h-max flex flex-col gap-5 w-72">
      {pinsToDisplay}
    </div>
  )
}