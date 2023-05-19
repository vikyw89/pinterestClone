import { useAuth } from '@/lib/hooks/useAuth'
import { useUser } from '@/lib/hooks/useUser'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import { setSyncSWR } from 'swr-sync-state'

const requestCounter = (useSWRNext) => {
  return (key, fetcher, config) => {
    if (key && key.match(new RegExp(
      String.raw`[/]sub[/]`, 'g'
    ))) {
      return useSWRNext(key, fetcher, config)
    } else if (typeof fetcher !== 'function') {
      return useSWRNext(key, fetcher, config)
    } else {
      const extendedFetcher = async (...args) => {
        setSyncSWR('loadingCounter', p => {
          if (!p) {
            p = 0
          }
          return p + 1
        })
        const result = await fetcher(...args)
        setSyncSWR('loadingCounter', p => p - 1)
        return result
      }
      return useSWRNext(key, extendedFetcher, config)
    }
  }
}

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
      <SWRConfig value={{
        onError: (error) => {
          setSyncSWR('error', error)
          setTimeout(() => {
            setSyncSWR('error')
          }, 1000)
        },
        use: [requestCounter]
      }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>)
}
