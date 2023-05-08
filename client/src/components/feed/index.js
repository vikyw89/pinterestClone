import { Page } from '@/common/layout/page'
import { useEffect, useRef, useState } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'
import { supabase } from '@/lib/supabase'
import { PinColumnComponent } from './pinColumn'

const FETCH_AMOUNT = 10
const QUEUE_LOWER_LIMIT = 10

const fetchPins = (fetchedIndex, FETCH_AMOUNT) => {
    setAsyncV('feeds', async () => {
        const response = await supabase
            .from('pins')
            .select()
            .order('inserted_at', { ascending: false })
            .range(fetchedIndex.current, (fetchedIndex.current + FETCH_AMOUNT))
        fetchedIndex.current = fetchedIndex.current + FETCH_AMOUNT
        return response.data
    })
}

export const FeedsComponent = () => {
    const pins = useAsyncV('feeds')
    const queue = useRef([])
    const fetchedIndex = useRef(0)
    const [flexChildren, setFlexChildren] = useState([])
    
    useEffect(() => {
        const resizeScreenHandler = (e) => {            
            let temp = []
            const screenWidth = e ? e.target.innerWidth : window.screen.width
            const columnQty = Math.floor(screenWidth / 300)
            for (let i = 0; i < columnQty; i++) {
                temp.push(<PinColumnComponent key={i} />)
            }
            setFlexChildren(temp)
        }
        window.addEventListener('resize', resizeScreenHandler)
        return () => {
            window.removeEventListener('resize', resizeScreenHandler)
        }
    }, [])
    // fill the main queue from fetched data
    useEffect(() => {
        if (!pins.data) return
        queue.current.push(pins.data)
    }, [pins.data])

    // refetch when main queue is running low
    useEffect(() => {
        if (queue.current.length < QUEUE_LOWER_LIMIT) {
            fetchPins(fetchedIndex, FETCH_AMOUNT)
        }
    })

    useEffect(() => {
        const screenWidth = window.screen.width
        const columnQty = Math.floor(screenWidth / 300)
        let temp = []
        for (let i = 1; i < columnQty; i++) {
            temp.push(<PinColumnComponent key={i} />)
            setFlexChildren(temp)
        }
    }, [])

    return (
        <Page>
            <div className="flex justify-evenly w-full overflow-y-scroll h-screen" style={{border:'5px solid purple'}}>
                {flexChildren}
            </div>
        </Page >
    )
}