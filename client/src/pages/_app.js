import { supabase } from '@/lib/supabase'
import { prepareNewAccountDatabase } from '@/lib/supabase/onNewAccount'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setAsyncV, updateAsyncV, updateSyncV, useAsyncV, useSyncV } from 'use-sync-v'

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

const isNewUser = async (user_id) => {
  const userFromDB = await supabase
    .from('users')
    .select()
    .eq('id', user_id)
  const result = userFromDB.data.length === 0
  return result
}

export default function App({ Component, pageProps }) {
  const activeTheme = useSyncV('activeTheme')
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  })

  useEffect(() => {
    if (!auth.data || auth.loading) return
    // check if there's user_id in DB
    const prepareNewUserDB = async () => {
      if (!await isNewUser(auth.data.user.id)) return
      setAsyncV('initialize', async () => {
        const response = await supabase
          .rpc('initialize', { id: auth.data.user.id, profile_picture_url: auth.data.user.user_metadata.picture })
          .throwOnError()
        return response
      })
    }
    prepareNewUserDB()
    // prepopulate new user DB
  }, [auth.data])

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
