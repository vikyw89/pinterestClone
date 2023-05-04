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
  const users_data = {
    id,
    username,
    first_name,
    last_name,
    profile_picture_url
  }
  const uploadUsersData = await supabase
    .from('users')
    .upsert(users_data)
    .throwOnError()
  const boards_data = {
    title: 'default',
    description: 'this is a default board',
    creator_id: id
  }
  const board_id = await supabase
    .from('boards')
    .insert(boards_data)
    .throwOnError()
    .select('id').data[0].id
  console.log("🚀 ~ file: _app.js:65 ~ initiateNewUserDB ~ board_id:", board_id)

  const boards_members_data = {
    board_id: board_id,
    member_id: id
  }

  const boards_members = await supabase
    .from('boards_members')
    .upsert(boards_members_data)
    .select()
  console.log("🚀 ~ file: _app.js:74 ~ initiateNewUserDB ~ boards_members:", boards_members)
}

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
  console.log("🚀 ~ file: _app.js:91 ~ App ~ auth:", auth)
  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  })

  useEffect(() => {
    if (!auth.data || auth.loading) return
    // check if there's user_id in DB 
    const prepareNewUserDB = async () => {
      if (!await isNewUser(auth.data.user.id)) return
      await setAsyncV('setupNewUser', async () => {
        await initiateNewUserDB({ first_name: '', id: auth.data.user.id, last_name: '', profile_picture_url: auth.data.user.user_metadata.picture, username: auth.data.user.user_metadata.name })
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
