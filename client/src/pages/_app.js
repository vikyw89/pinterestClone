
import { supabase } from '@/lib/supabase'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { asyncRefetchV, setAsyncV, setSyncV, useAsyncSubV, useAsyncV } from 'use-sync-v'
import useSWRImmutable from 'swr/immutable'
import useSWRSubscription from 'swr/subscription'
import { useAuth } from '@/lib/hooks/useAuth'

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

  const users = useAsyncSubV('users', async () => {
    const avatarURL = auth.data.user.user_metadata.avatar_url
    const response = await supabase
      .from('users')
      .update({
        'profile_picture_url': avatarURL
      })
      .eq('uuid', auth.data.user.id)
      .select()
    return response.data[0]
  })
  const router = useRouter()

  useEffect(() => {
    if (!auth.data && router.route !== '/') {
      router.push('/')
    }
    if (auth.data) {
      asyncRefetchV('users')
    }
  }, [auth.data, auth.loading, router])

  useEffect(() => {
    if (!users.data) return
    document.querySelector('html').setAttribute('data-theme', users.data.theme ?? 'dark')
  }, [users])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
