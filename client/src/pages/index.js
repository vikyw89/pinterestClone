import { Page } from '@/common/layout/page'
import { SignInComponent } from '@/components/signIn'
import { useEffect } from 'react'
import { updateSyncV, useAsyncV, useSyncV } from 'use-sync-v'

updateSyncV('show.signInComponent', true)

export default function Home() {
  const showSignInComponent = useSyncV('show.signInComponent')
  const {data:auth} = useAsyncV('auth')

  useEffect(()=>{
    if (auth) {
      updateSyncV('show.signInComponent', false)
    } else {
      updateSyncV('show.signInComponent', true)
    }
  },[auth])
  return (
    <Page>
      {showSignInComponent && <SignInComponent />}
    </Page>
  )
}
