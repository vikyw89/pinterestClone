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
  const {data:auth} = useAsyncV('auth')
  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  })

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const auth = updateAsyncV('auth', () => session)
      if (!auth.data) return
      prepareNewAccountDatabase()
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(()=>{
    if (auth) {
    } else {
      if (router.route === '/') return
      router.push('/')
    }
  },[auth])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
