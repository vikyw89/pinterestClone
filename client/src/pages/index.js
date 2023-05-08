import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { useAsyncV } from 'use-sync-v'

export default function Home() {
  const { data: auth } = useAsyncV('auth')

  return (
    <Page>
      {!auth && <SignInComponent />}
      {auth && <FeedsComponent />}
    </Page>
  )
}
