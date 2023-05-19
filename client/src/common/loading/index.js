import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setSyncSWR, useSyncSWR } from 'swr-sync-state'

export const Loading = () => {
  const router = useRouter()
  const route = useSyncSWR('route/loading')
  const loadingCounter = useSyncSWR('loadingCounter')

  useEffect(() => {
    const changeStartHandler = () => {
      setSyncSWR('route/loading', true)
    }
    const changeCompleteHandler = () => {
      setSyncSWR('route/loading', false)
    }
    router.events.on('routeChangeStart', changeStartHandler)
    router.events.on('routeChangeComplete', changeCompleteHandler)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', changeStartHandler)
      router.events.off('routeChangeComplete', changeCompleteHandler)
    }
  }, [router])
  return (
    <div className='fixed z-50 top-12 w-full flex'>
      {(route || (loadingCounter > 0)) && <progress className="progress progress-accent"></progress>}
    </div>
  )
}