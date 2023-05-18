import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { useAuth } from '@/lib/hooks/useAuth'
import { setSyncSWR, useSyncSWR } from 'swr-sync-state'

setSyncSWR('show/signInComponent', true)

const Home = () => {
  const auth = useAuth()
  const showSignInComponent = useSyncSWR('show/signInComponent')
  return (
    <Page>
      {!auth.data && showSignInComponent && <SignInComponent />}
      <FeedsComponent />
    </Page>
  )
}

export default Home
