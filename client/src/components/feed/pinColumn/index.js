import { useEffect, useId, useState } from 'react'
import { PinComponent } from './pin'
import { setSyncV, useSyncV } from 'use-sync-v'

export const PinColumnComponent = () => {
  const [pinsToDisplay, setPinsToDisplay] = useState([])

  useEffect(() => {
    setPinsToDisplay([<PinComponent key={0} props={{
      setPinsToDisplay: setPinsToDisplay,
    }} />])
  }, [])
  return (
    <div className="w-72 h-max flex flex-col gap-5">
      {pinsToDisplay}
    </div>
  )
}