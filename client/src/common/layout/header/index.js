import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  readSyncV,
  updateAsyncV,
  updateSyncV,
  useAsyncV,
  useQueryV,
  useSyncV,
} from 'use-sync-v'

export const Header = () => {
  const theme = useSyncV('theme')
  const auth = useSyncV('auth')
  console.log(auth)
  const router = useRouter()
  const showSignInComponent = () => {
    updateSyncV('show.signInComponent', true)
  }

  const signOutHandler = () => {
    updateAsyncV('signOut', async () => {
      const { error } = await supabase.auth.signOut()
      return error
    })
  }

  const navigateToLanding = () => {
    if (router.asPath === '/') return
    router.push('/')
  }
  return (
    <div className="flex bg-base-300 z-20 items-center text-base-content">
      {/* {!loading && <progress className="progress w-full fixed bottom-0"></progress>} */}
      <div className="flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer" onClick={navigateToLanding}>
        <Image
          alt="pinterest logo"
          src="../p-logo-lowres.png"
          width="32"
          height="32"
        />
        <a className="text-lg font-bold" >Pinterest</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          {!auth.session ? (
            <a
              className="btn btn-ghost rounded-btn"
              onClick={showSignInComponent}
            >
              Sign In
            </a>
          ) : (
            <a className="btn btn-ghost rounded-btn" onClick={signOutHandler}>
              Sign Out
            </a>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Theme
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-base-200 text-base-content"
            >
              {theme.map((el, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => {

                        updateSyncV('activeTheme', el)
                      }}
                    >
                      {el}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
