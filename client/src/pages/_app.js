import { supabase } from '@/lib/supabase'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setAsyncV, updateAsyncV, updateSyncV, useAsyncV } from 'use-sync-v'

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
  const users = useAsyncV('users')
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const router = useRouter()

  useEffect(() => {
    if (!users.data) return
    document.querySelector('html').setAttribute('data-theme', users.data.theme ?? 'dark')
  })

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
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
    if (auth.data) {
      setAsyncV('users', async () => {
        await supabase
          .from('users')
          .select()
          .eq('uuid', auth.data.user.id)
        return supabase
      })
    }
  }, [auth.data, auth.loading, router])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
