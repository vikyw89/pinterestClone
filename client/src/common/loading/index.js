import { useRouter } from "next/router"
import { useEffect } from "react"
import { updateSyncV, useSyncV } from "use-sync-v"

export const Loading = () => {
    const loading = useSyncV('show.loading')
    const authLoading = useSyncV('auth.loading')
    const router = useRouter()
    
    useEffect(() => {
      const changeStartHandler = () => {
        updateSyncV('show.loading', true)
      }
      const changeCompleteHandler = () => {
        updateSyncV('show.loading', false)
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
            {(loading || authLoading) && <progress className="progress progress-accent"></progress>}
        </>
    )
}