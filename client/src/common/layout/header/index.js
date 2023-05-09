import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  setAsyncV,
  setSyncV,
  updateAsyncV,
  updateSyncV,
  useAsyncV,
  useSyncV,
} from 'use-sync-v'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const Header = () => {
  const theme = useSyncV('theme')
  const auth = useAsyncV('auth')
  const router = useRouter()

  const avatarURL = auth?.data?.user?.user_metadata?.avatar_url
  console.log("🚀 ~ file: index.js:20 ~ Header ~ avatarURL:", avatarURL)

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
    router.push('/')
  }

  const navigateToCreatePin = () => {
    router.push('/createPin')
  }

  const themeHandler = async (e) => {
    const updatedValue = e.target.textContent
    await setAsyncV('users', async () => {
      const response = await supabase
        .from('users')
        .update({ 'theme': updatedValue })
        .eq('uuid', auth.data.user.id)
        .select()
      setSyncV('users.data.theme', updatedValue)
      return response.data[0]
    })
  }
  return (
    <div className="flex bg-base-300 z-20 items-center text-base-content">
      <div className="flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer">
        <div onClick={navigateToLanding} className="px-2 lg:flex-none flex items-center gap-1 cursor-pointer">
          <div className='w-12'>
            <Image
              alt="pinterest logo"
              src="/p-logo-lowres.png"
              width="0"
              height="0"
              loading='lazy'
              sizes="100vw"
              className='w-auto h-auto'
            />
          </div>
          <a className="text-lg font-bold" >Pinterest</a>
        </div>
        {auth.data &&
          <a
            className="btn btn-ghost rounded-btn"
            onClick={navigateToCreatePin}
          >
            Create
          </a>
        }
      </div>
      <div className="flex justify-end flex-1 px-2 items-center">
        <div className="flex">
          {!auth.data ? (
            <a
              className="btn btn-ghost rounded-btn p-2"
              onClick={showSignInComponent}
            >
              Sign In
            </a>
          ) : (
            <a className="btn btn-ghost rounded-btn p-2" onClick={signOutHandler}>
              Sign Out
            </a>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn p-2 btn-ghost rounded-btn">
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
                      onClick={themeHandler}
                    >
                      {el}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="avatar aspect-square">
          <div className="w-8 rounded-full flex items-center">
            {avatarURL ? <Image src={avatarURL}
              alt="avatar"
              width="0"
              height="0"
              className="w-auto h-auto"
              id="pinImageURL"
            />
              :
              <AccountCircleIcon className='text-3xl' />
            }

          </div>
        </div>
      </div>
    </div>
  )
}
