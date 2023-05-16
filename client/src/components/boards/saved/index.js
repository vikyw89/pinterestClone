import { useEffect } from 'react'
import { useAsyncSubV, useAsyncV } from 'use-sync-v'
import { v4 } from 'uuid'
import { BoardThumbnailComponent } from './boardThumbnail'

export const SavedComponent = () => {
  const user = useAsyncV('user')
  const boards = user?.data?.boards
  // const boards = useAsyncSubV('')
  return (
    <div className='flex flex-wrap gap-2'>
      {boards && boards.map(el=>{
        return (
          <BoardThumbnailComponent key={el.uuid} props={el}/>
        )
      })}
    </div>
  )
}