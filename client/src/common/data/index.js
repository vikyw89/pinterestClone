import { useEffect } from "react"
import { useAsyncSubV } from "use-sync-v"

export const Data = () => {
    const test = useAsyncSubV('test', async () => {
        console.log('refetch ! test')
        return new Date().getSeconds()
    })
    useEffect(()=>{
        return ()=>{
            console.log('removed')
        }
    },[])
    console.log("🚀 ~ file: index.js:8 ~ test ~ test:", test)
}