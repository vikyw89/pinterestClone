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
          .catch(error => {
            setSyncSWR('notif/error', p => {
              if (!p) {
                p = []
              }
              setTimeout('notif/error', p => p.slice(1),10000)
              return [...p, error]
            })
          })
          .finally(() => {
            setSyncSWR('loadingCounter', p => p - 1)
          })
        return result
      }
      return useSWRNext(key, extendedFetcher, config)
    }
  }
}

if (typeof window !== 'undefined') {
  document.querySelector('html').setAttribute('data-theme', 'retro')
}

export default function App({ Component, pageProps }) {
  const auth = useAuth()
  const user = useUser()
  const router = useRouter()
  const activeTheme = user?.data?.theme

  // handle protected route
  useEffect(() => {
    if (!auth.data && !auth.isLoading && !auth.isValidating && router.route !== '/') {
      setSyncSWR('notif/warning', p => {
        if (!p) {
          p = []
        }
        setTimeout(() => {
          setSyncSWR('notif/warning', p => p.slice(1))
        }, 5000)
        return [...p, 'unauthorized access, please sign in']
      })
      setSyncSWR('show/signInComponent', true)
      router.push('/')
    }
  }, [auth.data, auth.isLoading, auth.isValidating, router])

  useEffect(() => {
    if (!activeTheme) return
    document.querySelector('html').setAttribute('data-theme', activeTheme)
  }, [activeTheme])

  return (
    <>
      <SWRConfig value={{
        use: [requestCounter]
      }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>)
}
