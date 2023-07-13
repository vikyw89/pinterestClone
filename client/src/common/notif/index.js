import { useSyncSWR } from 'swr-sync-state'
import { v4 } from 'uuid'

export const Notif = () => {
  const error = useSyncSWR('notif/error') ?? []
  const warning = useSyncSWR('notif/warning') ?? []
  const info = useSyncSWR('notif/info') ?? []
  const success = useSyncSWR('notif/success') ?? []

  const popNotif = () => {
    // e.currentTarget.classList.add('hidden')
  }
  return (
    <div className='fixed bottom-0 left-0 right-0 w-full flex flex-col cursor-pointer gap-2'>
      {error &&
        error.map((e) => {
          return (
            <div key={v4()} className="alert alert-error shadow-lg animate-bounce w-fit" onClick={popNotif}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{e.message}</span>
              </div>
            </div>
          )
        })
      }
      {warning &&
        warning.map((e) => {
          return (
            <div key={v4()} className="alert alert-warning shadow-lg animate-bounce w-fit" onClick={popNotif}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{e}</span>
              </div>
            </div>
          )
        })
      }
      {info && info.length !== 0 &&
        (
          <div key={v4()} className="alert alert-info shadow-lg animate-bounce w-fit" onClick={popNotif}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{info.slice(-1)}</span>
            </div>
          </div>
        )
      }
      {success &&
        success.map((e) => {
          return (
            <div key={v4()} className="alert alert-success shadow-lg animate-bounce w-fit" onClick={popNotif}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{e}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}