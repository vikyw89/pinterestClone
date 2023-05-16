import { Page } from '@/common/layout/page'
import { BoardsComponent } from '@/components/boards'
import { ProfileComponent } from '@/components/profile'
import { useAsyncV } from 'use-sync-v'

export default function Profile() {
  const auth = useAsyncV('auth')
  
  return (
    <Page>
      <div className="flex  flex-col justify-center">
        {auth.data && <ProfileComponent />}
        {auth.data && <BoardsComponent />}
      </div>
    </Page>
  )
}