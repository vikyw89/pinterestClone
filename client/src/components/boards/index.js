import { setSyncSWR, useSyncSWR } from 'swr-sync-state'
import { CreatedComponent } from './created'
import { SavedComponent } from './saved'

const tabs = [
  {
    index: 1,
    key: 'Created',
    content: <CreatedComponent key={1}/>
  },
  {
    index: 2,
    key: 'Saved',
    content:<SavedComponent key={2}/>
  }
]

setSyncSWR('activeTab','Saved')

export const BoardsComponent = () => {
  const activeTab = useSyncSWR('activeTab')

  const tabHandler = (e) => {
    e.stopPropagation()
    const value = e.target.textContent
    setSyncSWR('activeTab', value)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="tabs">
        {tabs.map((el) => {
          if (el.key === activeTab) {
            return <a key={el.index} onClick={tabHandler} className="tab tab-bordered tab-active font-extrabold">{el.key}</a>

          } else {
            return <a key={el.index} onClick={tabHandler} className="tab tab-bordered">{el.key}</a>
          }
        })}
      </div>
      <div className="flex flex-1 w-full">
        {tabs.map((el) => {
          if (el.key === activeTab) {
            return el.content
          }
        })}
      </div>
    </div>
  )
}