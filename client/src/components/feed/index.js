import { useEffect, useState } from 'react'
import { PinColumnComponent } from './pinColumn'

const PIN_WIDTH = 300

export const FeedsComponent = ({ props }) => {
  const { feeds } = props
  const [index, setIndex] = useState(0)

  const [columns, setColumns] = useState()
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
    <div>
      {feeds &&
        <div className='flex gap-5 justify-center p-5'>
          {feeds.length !== 0 && columns &&
            columns.map((e, i) => {
              return (
                <PinColumnComponent key={i} props={{ ...props, index, setIndex }} />
              )
            })
          }
        </div>
      }
    </div >
  )
}