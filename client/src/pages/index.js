import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { useAuth } from '@/lib/hooks/useAuth'
import { setSyncV, useSyncV } from 'use-sync-v'
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
