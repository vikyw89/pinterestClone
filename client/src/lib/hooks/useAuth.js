import useSWRSubscription from 'swr/subscription'
import { supabase } from '../supabase'
import useSWRImmutable from 'swr/immutable'

export const useAuth = () => {
  const session = useSWRImmutable('api/auth', async () => {
    const response = await supabase.auth.getUser()
    const data = response?.data?.user
    return data
  }, { errorRetryCount: 0 })
  const auth = useSWRSubscription('api/sub/auth', (key, { next }) => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
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