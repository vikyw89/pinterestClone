import { Page } from '@/common/layout/page'
import { useEffect, useState } from 'react'
import { asyncRefetchV, setAsyncV, setSyncV, useAsyncSubV, useSyncV } from 'use-sync-v'
import { supabase } from '@/lib/supabase'
import { PinColumnComponent } from './pinColumn'

const FETCH_AMOUNT = 50
const QUEUE_LOWER_LIMIT = 50
const PIN_WIDTH = 300
setSyncV('queue', [])
setSyncV('index', 0)

export const FeedsComponent = () => {
  const [column, setColumn] = useState()
  const fetchedPins = useAsyncSubV('fetchedPins', async (p) => {
    const previous = p ? [] : p
    const startIndex = previous.length
    const endIndex = startIndex + FETCH_AMOUNT
    console.log("🚀 ~ file: index.js:19 ~ fetchedPins ~ endIndex:", endIndex)
    // const response = await supabase
    //   .from('pins')
    //   .select(`*,
    //     users(*)`)
    //   .order('inserted_at', { ascending: false })
    //   .range(startIndex, endIndex)
    // console.log("🚀 ~ file: index.js:25 ~ fetchedPins ~ response:", response)
    // return []
    // if (response.data[0].length === 0) {
    //   setNothingToFetch(true)
    //   return [...previous, ...previous]
    // }
    // return [...previous, ...(response.data[0])]
  })
  const displayIndex = useSyncV('index')
  const [nothingToFetch, setNothingToFetch] = useState(false)

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


  // refetch when main queue is running low
  // useEffect(() => {
  //   if (!fetchedPins.data) return
  //   const needRefetch = fetchedPins.length <= (displayIndex + QUEUE_LOWER_LIMIT)
  //   if (!needRefetch) return
  //   if (nothingToFetch) {
  //     setSyncV('fetchedPins', p => {
  //       return [...p, ...p]
  //     })
  //   } else {
  //     // asyncRefetchV('fetchedPins')
  //   }
  // },[fetchedPins])

  return (
    <Page>
      <div></div>
      {/* {fetchedPins.data &&
        <div className='flex gap-5 justify-center p-5'>
          {fetchedPins.data.length !== 0 && column &&
            column.map((e) => {
              return e
            })
          }
        </div>
      } */}
    </Page >
  )
}