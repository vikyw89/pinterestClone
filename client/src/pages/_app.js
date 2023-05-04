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

const initiateNewUserDB = async ({ id, username, first_name, last_name, profile_picture_url }) => {
  const data = {
    id,
    username,
    first_name,
    last_name,
    profile_picture_url
  }
  const uploadData = await supabase
    .from('users')
    .upsert(data)
    .throwOnError()
}

const isNewUser = async (user_id) => {
  const userFromDB = await supabase
    .from('users')
    .select()
    .eq('id', user_id)
  return userFromDB.length === 0
}

export default function App({ Component, pageProps }) {
  const activeTheme = useSyncV('activeTheme')
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  console.log("🚀 ~ file: _app.js:68 ~ App ~ auth:", auth)
  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  })

  useEffect(() => {
    if (!auth.data) return
    // check if there's user_id in DB 
    if (!isNewUser(auth.data.user.id)) return
    // prepopulate new user DB
    setAsyncV('setupNewUser', async () => {
      initiateNewUserDB({ first_name: '', id: auth.data.user.id, last_name: '', profile_picture_url: auth.data.user.user_metadata.picture, username: auth.data.user.user_metadata.name })
    })
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
