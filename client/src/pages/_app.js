import { supabase } from '@/lib/supabase'
import { prepareNewAccountDatabase } from '@/lib/supabase/onNewAccount'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { updateAsyncV, updateSyncV, useAsyncV, useSyncV } from 'use-sync-v'

updateSyncV(
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
  const activeTheme = useSyncV('activeTheme')
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  })

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      updateAsyncV('auth', () => session)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (auth.loading) return
    if (!auth.data && router.route !== '/') {
      router.push('/')
    }
  }, [auth.data])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
