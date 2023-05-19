import { useEffect, useState } from 'react'
import { PinColumnComponent } from './pinColumn'
import { v4 } from 'uuid'

const PIN_WIDTH = 300

export const FeedsComponent = ({ props }) => {
  console.log("🚀 ~ file: index.js:8 ~ FeedsComponent ~ props:", props)
  const { feeds } = props
  const [index, setIndex] = useState(0)
  const [column, setColumn] = useState()

  useEffect(() => {
    const screenWidth = window.innerWidth
    const columnQty = Math.floor(screenWidth / PIN_WIDTH)
    let temp = []
    for (let i = 0; i < columnQty; i++) {
      temp.push(<PinColumnComponent key={v4()} props={{ ...props, index, setIndex, feeds }} className="max-w-xs" />)
    }
    setColumn(temp)
    const resizeScreenHandler = (e) => {
      let temp = []
      const screenWidth = e ? e.target.innerWidth : window.innerWidth
      const columnQty = Math.floor(screenWidth / PIN_WIDTH)
      for (let i = 0; i < columnQty; i++) {
        temp.push(<PinColumnComponent key={v4()} />)
      }
      setColumn(temp)
    }
    window.addEventListener('resize', resizeScreenHandler)
    return () => {
      window.removeEventListener('resize', resizeScreenHandler)
    }
  }, [])

  return (
    <div>
      {feeds &&
        <div className='flex gap-5 justify-center p-5'>
          {feeds.length !== 0 && column &&
            column.map((e) => {
              return e
            })
          }
        </div>
      }
    </div >
  )
}