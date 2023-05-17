
import { supabase } from '@/lib/supabase'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { asyncRefetchV, setAsyncV, setSyncV, useAsyncSubV, useAsyncV } from 'use-sync-v'
import useSWRImmutable from 'swr/immutable'
import useSWRSubscription from 'swr/subscription'
import { useAuth } from '@/lib/hooks/useAuth'
import { useUser } from '@/lib/hooks/useUser'

setSyncV(
  'theme',
  [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ].sort((a, b) => (a > b ? 1 : -1))
)

export default function App({ Component, pageProps }) {
  const auth = useAuth()
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!auth.data && router.route !== '/') {
      router.push('/')
    }
    if (auth.data) {
      asyncRefetchV('users')
    }
  }, [auth.data, router])

  useEffect(() => {
    if (!user.data) return
    document.querySelector('html').setAttribute('data-theme', user.data.theme ?? 'dark')
  }, [user])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
