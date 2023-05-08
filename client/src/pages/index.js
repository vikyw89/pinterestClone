import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { setSyncV, useAsyncV, useSyncV } from 'use-sync-v'

setSyncV('show.signInComponent', true)

export default function Home() {
  const auth = useAsyncV('auth')
  const showSignInComponent = useSyncV('show.signInComponent')
  return (
    <Page>
      {!auth.data && showSignInComponent && <SignInComponent />}
      <FeedsComponent />
    </Page>
  )
}
