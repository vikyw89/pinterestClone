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
        const avatarURL = auth.data.user.user_metadata.avatar_url
        const response = await supabase
          .from('users')
          .update({
            'profile_picture_url':avatarURL
          })
          .eq('uuid', auth.data.user.id)
          .select()
        return response.data[0]
      })
    }
  }, [auth.data, auth.loading, router])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
