import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { updateSyncV, useAsyncV, useSyncV } from 'use-sync-v'

export const Loading = () => {
  const router = useRouter()
  const showLoading = useSyncV('show.loading')
  const routeLoading = useSyncV('route.loading')
  const { loading: signInLoading } = useAsyncV('signIn')
  const { loading: signOutLoading } = useAsyncV('signOut')
  const { loading: authLoading } = useAsyncV('auth')
  const { loading: boardsLoading } = useAsyncV('boards')

  useEffect(() => {
    if (routeLoading || signInLoading || signOutLoading || authLoading || boardsLoading) {
      updateSyncV('show.loading', true)
    } else {
      updateSyncV('show.loading', false)
    }
  }, [signInLoading, routeLoading, signOutLoading, authLoading, boardsLoading])

  useEffect(() => {
    const changeStartHandler = () => {
      updateSyncV('route.loading', true)
    }
    const changeCompleteHandler = () => {
      updateSyncV('route.loading', false)
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
    <>
      {showLoading && <progress className="progress progress-accent"></progress>}
    </>
  )
}