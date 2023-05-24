import { useEffect, useRef, useState } from 'react'
import { PinColumnComponent } from './pinColumn'

let PIN_WIDTH = 300
if (typeof window !== 'undefined' && window.innerWidth <= 500) {
  PIN_WIDTH = window.innerWidth / 2
}

export const FeedsComponent = ({ props }) => {
  const { feeds } = props
  const index = useRef(-1)

  const [columns, setColumns] = useState(['dummy'])
  // set column when resized
  useEffect(() => {
    const resizeScreenHandler = (e) => {
      let temp = []
      const screenWidth = e ? e.target.innerWidth : window.innerWidth
      const columnQty = Math.floor(screenWidth / PIN_WIDTH)
      for (let i = 0; i < columnQty; i++) {
        temp.push('dummy')
      }
      setColumns(temp)
    }
    window.addEventListener('resize', resizeScreenHandler)
    return () => {
      window.removeEventListener('resize', resizeScreenHandler)
    }
  }, [])
  // set columns when mounted
  useEffect(() => {
    const screenWidth = window.innerWidth
    const columnQty = Math.floor(screenWidth / PIN_WIDTH)
    let temp = []
    for (let i = 0; i < columnQty; i++) {
      temp.push('dummy')
    }
    setColumns(temp)
  }, [])

  return (
    <div className='w-full overflow-x-hidden'>
      {feeds &&
        <div className='gap-1 md:gap-5 justify-center p-1 md:p-5' style={{
          display:'grid',
          gridAutoColumns: 'minmax(0,1fr)',
          gridAutoFlow:'column'
        }}>
          {feeds.length !== 0 && columns &&
            columns.map((e, i) => {
              return (
                <PinColumnComponent key={i} props={{ ...props, index}} />
              )
            })
          }
        </div>
      }
    </div >
  )
}