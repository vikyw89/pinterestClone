import { useAuth } from '@/lib/hooks/useAuth'
import { useUser } from '@/lib/hooks/useUser'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const auth = useAuth()
  const user = useUser()
  const router = useRouter()
  const activeTheme = user?.data?.theme

  useEffect(() => {
    if (!auth.data && router.route !== '/') {
      router.push('/')
    }
  }, [auth.data, router])

  useEffect(() => {
    if (!activeTheme) return
    document.querySelector('html').setAttribute('data-theme', activeTheme ?? 'dark')
  }, [activeTheme])

  return (
    <>
      <Component {...pageProps} />
    </>)
}
