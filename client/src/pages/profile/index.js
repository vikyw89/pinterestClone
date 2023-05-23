import { Page } from '@/common/layout/page'
import { BoardsComponent } from '@/components/boards'
import { ProfileComponent } from '@/components/profile'
import { useAuth } from '@/lib/hooks/useAuth'

export default function Profile() {
  const auth = useAuth()

  return (
    <Page>
      <div className="flex flex-col justify-center">
        {auth.data && <ProfileComponent />}
        {auth.data && <BoardsComponent/>}
      </div>
    </Page>
  )
}