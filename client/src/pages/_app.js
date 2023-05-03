import { supabase } from '@/lib/supabase'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { updateSyncV, useQueryV, useSyncV } from 'use-sync-v'

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
updateSyncV('auth', {
  event:null,
  session:null
})

export default function App({ Component, pageProps }) {
  const activeTheme = useSyncV('activeTheme')
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  })
  useQueryV('auth',)
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      updateSyncV('auth', { event, session })
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])
  return <Component {...pageProps} />
}
