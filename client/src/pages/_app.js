
import { supabase } from '@/lib/supabase'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { asyncRefetchV, setAsyncV, setSyncV, useAsyncSubV, useAsyncV } from 'use-sync-v'
import useSWRImmutable from 'swr/immutable'
import useSWRSubscription from 'swr/subscription'
import { useAuth } from '@/lib/hooks/useAuth'
import { useUser } from '@/lib/hooks/useUser'

export default function App({ Component, pageProps }) {
  const auth = useAuth()
  const user = useUser()
  const router = useRouter()
  const activeTheme = user?.data?.theme

  useEffect(() => {
    if (!auth.data && router.route !== '/') {
      router.push('/')
    }
  }, [auth.data, router])

  useEffect(() => {
    if (!activeTheme) return
    document.querySelector('html').setAttribute('data-theme', activeTheme ?? 'dark')
  }, [activeTheme])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
