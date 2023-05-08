import { Page } from '@/common/layout/page'
import { useEffect, useState } from 'react'
import { setAsyncV, setSyncV, useSyncV } from 'use-sync-v'
import { supabase } from '@/lib/supabase'
import { PinColumnComponent } from './pinColumn'

const FETCH_AMOUNT = 50
const QUEUE_LOWER_LIMIT = 50
setSyncV('queue', [])
setSyncV('index', 0)
setSyncV('fetchedPins', [])

export const FeedsComponent = () => {
  const [column, setColumn] = useState()
  const fetchedPins = useSyncV('fetchedPins')
  const displayIndex = useSyncV('index')
  const [nothingToFetch, setNothingToFetch] = useState(false)

  useEffect(() => {
    const screenWidth = window.screen.width
    const columnQty = Math.floor(screenWidth / 300)
    let temp = []
    for (let i = 1; i < columnQty; i++) {
      temp.push(<PinColumnComponent key={i} />)
    }
    setColumn(temp)

    const resizeScreenHandler = (e) => {
      let temp = []
      const screenWidth = e ? e.target.innerWidth : window.screen.width
      const columnQty = Math.floor(screenWidth / 300)
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
  useEffect(() => {
    const needRefetch = fetchedPins.length <= (displayIndex + QUEUE_LOWER_LIMIT)
    if (!needRefetch) return
    if (nothingToFetch) {
      setSyncV('fetchedPins', p => {
        return [...p, ...p]
      })
    }
    setAsyncV('downloadPins', async () => {
      const startIndex = fetchedPins.length
      const endIndex = startIndex + FETCH_AMOUNT
      const response = await supabase
        .from('pins')
        .select(`*,
        users(*)`)
        .order('inserted_at', { ascending: false })
        .range(startIndex, endIndex)
      if (response.data.length === 0) {
        setNothingToFetch(true)
      } else {
        setSyncV('fetchedPins', p => {
          return [...p, ...(response.data)]
        })
      }
      return response.data
    })
  })

  return (
    <Page>
      <div className="flex justify-center max-w-full overflow-y-scroll h-screen gap-5 p-5">
        {fetchedPins.length !== 0 && column &&
          column.map((e) => {
            return e
          })
        }
      </div>
    </Page >
  )
}