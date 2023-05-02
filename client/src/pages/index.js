import { Page } from '@/common/layout/page'
import { SignInComponent } from '@/components/signIn'
import { updateAsyncV, updateSyncV, useQueryV, useSyncV } from 'use-sync-v'

updateSyncV('show.signInComponent', true)

export default function Home() {
  const auth = useSyncV('auth')
  const showSignInComponent = useSyncV('show.signInComponent')

  return (
    <Page>
      {showSignInComponent && !auth.session && <SignInComponent />}
    </Page>
  )
}
