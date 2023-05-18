import useSWRSubscription from 'swr/subscription'
import { supabase } from '../supabase'

export const useAuth = () => {
  const auth = useSWRSubscription('api/auth', (key, { next }) => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      next(null, session)
    })
    return () => {
      subscription.unsubscribe()
    }
  })
  return auth
}