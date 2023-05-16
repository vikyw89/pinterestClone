import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setSyncV, useAsyncV } from 'use-sync-v'

export const Loading = () => {
  const router = useRouter()
  const route = useAsyncV('route')
  const signIn = useAsyncV('signIn')
  const signOut = useAsyncV('signOut')
  const auth = useAsyncV('auth')
  const boards = useAsyncV('boards')
  const pin = useAsyncV('pin')
  const initialize = useAsyncV('initialize')
  const downloadPins = useAsyncV('downloadPins')
  const users = useAsyncV('users')

  useEffect(() => {
    const changeStartHandler = () => {
      setSyncV('route.loading', true)
    }
    const changeCompleteHandler = () => {
      setSyncV('route.loading', false)
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
      {(route.loading ||
        signIn.loading ||
        signOut.loading ||
        auth.loading ||
        boards.loading ||
        pin.loading ||
        initialize.loading ||
        downloadPins.loading ||
        users.loading) && <progress className="progress progress-accent"></progress>}
    </div>
  )
}