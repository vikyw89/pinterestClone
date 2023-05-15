import { useEffect } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'

export const SavedComponent = () => {
  const boards = useAsyncV('boards')
  console.log('🚀 ~ file: index.js:6 ~ SavedComponent ~ boards:', boards)

  useEffect(()=>{
    // setAsyncV('boards')
  },[])
  return (
    <div>

    </div>
  )
}