import useSWRSubscription from 'swr/subscription'
import { supabase } from '../supabase'
import useSWRImmutable from 'swr/immutable'
import { setSyncSWR } from 'swr-sync-state'

export const useAuth = () => {
  const session = useSWRImmutable('api/auth', async () => {
    const response = await supabase.auth.getUser()
    const data = response?.data?.user
    return data
  }, { errorRetryCount: 0 })
  const auth = useSWRSubscription('api/sub/auth', (key, { next }) => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const name = session.user.user_metadata.name
        setSyncSWR('notif/info', p => {
          if (!p) {
            p = []
          }
          // prevent duplicate notif
          const message = `Welcome aboard, ${name} !`
          if (p.slice(-1) === message) return p
          setTimeout(() => {
            setSyncSWR('notif/info', p => p.slice(1))
          }, 5000)
          return [...p, message]
        })
      } else {
        setSyncSWR('notif/info', p => {
          if (!p) {
            p = []
          }
          // prevent duplicate notif
          const message = 'You\'re signed out !'
          if (p.slice(-1) === message) return p
          setTimeout(() => {
            setSyncSWR('notif/info', p => p.slice(1))
          }, 5000)
          return [...p, message]
        })
      }
      next(null, session)
    })
    return () => {
      subscription.unsubscribe()
    }
  })
  return {
    ...session,
    ...auth
  }
}