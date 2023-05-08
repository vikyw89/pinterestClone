import { Page } from '@/common/layout/page'
import { useEffect, useRef, useState } from 'react'
import { setAsyncV, setSyncV, useAsyncV, useSyncV } from 'use-sync-v'
import { supabase } from '@/lib/supabase'
import { PinColumnComponent } from './pinColumn'

const FETCH_AMOUNT = 10
const QUEUE_LOWER_LIMIT = 5
setSyncV('queue', [])
setSyncV('index', 0)
setSyncV('fetchedPins', [])
export const FeedsComponent = () => {
    const [column, setColumn] = useState()
    const fetchedPins = useSyncV('fetchedPins')
    const displayIndex = useSyncV('index')

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
        if ((fetchedPins.length - displayIndex) < QUEUE_LOWER_LIMIT) {
            setAsyncV('downloadPins', async () => {
                const startIndex = fetchedPins.length
                const endIndex = startIndex + FETCH_AMOUNT
                const response = await supabase
                    .from('pins')
                    .select()
                    .order('inserted_at', { ascending: false })
                    .range(startIndex, endIndex)
                setSyncV('fetchedPins', p => {
                    return [...p, ...(response.data)]
                })
                return response.data
            })
        }
    }, [displayIndex])

    return (
        <Page>
            <div className="flex justify-center max-w-full overflow-y-scroll max-h-screen gap-5">
                {fetchedPins.length !== 0 && column &&
                    column.map((e, i) => {
                        return e
                    })
                }
            </div>
        </Page >
    )
}