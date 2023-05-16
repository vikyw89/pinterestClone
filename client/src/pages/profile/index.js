import { Page } from '@/common/layout/page'
import { ProfileComponent } from '@/components/profile'
import { useAsyncV } from 'use-sync-v'

export default function Profile (){
  const auth = useAsyncV('auth')

  return (
    <Page>
      <div className="flex justify-center">
        {auth.data && <ProfileComponent/>}
      </div>
    </Page>
  )
}