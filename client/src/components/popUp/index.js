import { setSyncSWR } from 'swr-sync-state'

export const PopUpComponent = ({ children }) => {
  const closeComponent = (e) => {
    if (e.target.id !== 'blurredBackground') return
    setSyncSWR('show/signInComponent', false)
  }
  return (
    <div
      id="blurredBackground"
      className="z-50 bg-base-300 text-base-content bg-opacity-20 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      onClick={closeComponent}
    >
      <div className="flex flex-col items-center justify-start p-10 max-w-sm rounded-box bg-neutral text-neutral-content">
        {children}
      </div>
    </div>
  )
}