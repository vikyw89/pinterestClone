import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { useAuth } from '@/lib/hooks/useAuth'
import { useSyncSWR } from 'swr-sync-state'

const Home = () => {
  const auth = useAuth()
  const showSignInComponent = useSyncSWR('show/signInComponent', true)
  return (
    <Page>
      {!auth.data && showSignInComponent && <SignInComponent />}
      <FeedsComponent />
    </Page>
  )
}

export default Home
