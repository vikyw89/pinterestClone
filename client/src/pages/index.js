import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { setSyncV, useAsyncV, useSyncV } from 'use-sync-v'
import { useAuth } from '@/lib/hooks/useAuth'
setSyncV('show.signInComponent', true)

const Home = () => {
  const auth = useAuth()
  const showSignInComponent = useSyncV('show.signInComponent')
  return (
    <Page>
      {!auth.data && showSignInComponent && <SignInComponent />}
      <FeedsComponent />
    </Page>
  )
}

export default Home
