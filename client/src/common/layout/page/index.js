import { Loading } from '@/common/loading'
import { Notif } from '@/common/notif'
import { ProtectedData } from '@/common/protected'
import { useAsyncV } from 'use-sync-v'
import { Header } from '../header'


export const Page = ({ children }) => {
  const auth = useAsyncV('auth')
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content">
      <Header />
      <Loading/>
      {auth.data && <ProtectedData/>}
      <main className="flex-1 overflow-y-auto flex flex-col">{children}</main>
      <Notif/>
    </div>
  )
}
