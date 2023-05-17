import { Loading } from '@/common/loading'
import { Header } from '../header'
import { Notif } from '@/common/notif'
import { Data } from '@/common/data'
export const Page = ({ children }) => {

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content">
      <Header />
      <Loading/>
      <Data/>
      <main className="flex-1 overflow-y-auto flex flex-col">{children}</main>
      <Notif/>
    </div>
  )
}
