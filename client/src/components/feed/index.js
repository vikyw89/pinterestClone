import { Page } from '@/common/layout/page'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { setSyncV, useAsyncSubV } from 'use-sync-v'
import { PinColumnComponent } from './pinColumn'

const FETCH_AMOUNT = 50
const PIN_WIDTH = 300
setSyncV('queue', [])
setSyncV('index', 0)

export const FeedsComponent = () => {
  const [column, setColumn] = useState()
  const [nothingToFetch, setNothingToFetch] = useState(false)
  const { data: fetchedPins } = useAsyncSubV('pins', async (p) => {
    if (nothingToFetch) {
      return [...p, ...p]
    }
    const previous = p ? p : []
    const startIndex = previous.length
    const endIndex = startIndex + FETCH_AMOUNT
    const response = await supabase
      .from('pins')
      .select(`*,
        users(*)`)
      .order('inserted_at', { ascending: false })
      .range(startIndex, endIndex)
    if (response.data.length < FETCH_AMOUNT) {
      setNothingToFetch(true)
    }
    return [...previous, ...(response.data)]
  })

  useEffect(() => {
    const screenWidth = window.innerWidth
    const columnQty = Math.floor(screenWidth / PIN_WIDTH)
    let temp = []
    for (let i = 0; i < columnQty; i++) {
      temp.push(<PinColumnComponent key={i} className="max-w-xs" />)
    }
    setColumn(temp)
    const resizeScreenHandler = (e) => {
      let temp = []
      const screenWidth = e ? e.target.innerWidth : window.innerWidth
      const columnQty = Math.floor(screenWidth / PIN_WIDTH)
      for (let i = 0; i < columnQty; i++) {
        temp.push(<PinColumnComponent key={i} />)
      }
      setColumn(temp)
    }
    window.addEventListener('resize', resizeScreenHandler)
    return () => {
      window.removeEventListener('resize', resizeScreenHandler)
    }
  }, [])

  return (
    <Page>
      {fetchedPins &&
        <div className='flex gap-5 justify-center p-5'>
          {fetchedPins.length !== 0 && column &&
            column.map((e) => {
              return e
            })
          }
        </div>
      }
    </Page >
  )
}