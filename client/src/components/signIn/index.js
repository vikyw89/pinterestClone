import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { updateAsyncV } from 'use-sync-v'
import { PopUpComponent } from '../popUp'

export const SignInComponent = () => {
  const moveToSignUpPage = () => {
  }

  const emailSignInHandler = () => { }

  const gmailSignInHandler = (e) => {
    e.currentTarget.classList.add('loading')
    e.currentTarget.classList.add('disabled')
    updateAsyncV('signIn', async () => {
      const response = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.href
        }
      })
      return response
    })
  }

  return (
    <PopUpComponent>
      <Image alt="pinterest logo" src="./p-logo-lowres.png" width="100" height="100" />
      <p className="font-extrabold text-center">Welcome to Pinterest</p>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="pl-4">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs bg-opacity-20 placeholder-neutral-content"
        />
        <label htmlFor="password" className="pl-4 ">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs bg-opacity-20  placeholder-neutral-content"
        />
        <a className="font-bold text-sm text-center">Forgot your password?</a>
        <button
          className="btn w-full btn-primary text-primary-content"
          onClick={emailSignInHandler}
        >
          Log in
        </button>
        <p className="text-center">OR</p>
        <button
          className="btn flex bg-transparent border-accent rounded-box items-center gap-2"
          onClick={gmailSignInHandler}
        >
          <Image
            alt="google logo"
            height="30"
            width="30"
            src="./Google__G__Logo.svg"
            style={{
              aspectRatio: '1'
            }}
          />
          <p className="text-neutral-content">Continue with Google</p>
        </button>
        <p className="text-center text-xs">
          By continuing, you agree to Pinterest&apos;s Terms of Service and
          acknowledge you&apos;ve read our Privacy Policy Notice at collection.
        </p>
        <div className="divider m-0"></div>
        <div className="text-xs text-center">
          <p>
            Not on Pinterest yet?{' '}
            <a
              className="underline cursor-pointer font-bold"
              onClick={moveToSignUpPage}
            >
              Sign up!
            </a>
          </p>
        </div>
      </div>

    </PopUpComponent>
  )
}
