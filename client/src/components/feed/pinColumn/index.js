import { useState } from 'react'
import { PinComponent } from './pin'

export const PinColumnComponent = ({ props }) => {
  const [pinsToDisplay, setPinsToDisplay] = useState(['dummy'])
  return (
    <div className="h-max flex flex-col gap-5 max-w-full overflow-hidden">
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