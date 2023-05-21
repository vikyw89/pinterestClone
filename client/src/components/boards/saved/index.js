import { useUser } from '@/lib/hooks/useUser'
import { BoardThumbnailComponent } from './boardThumbnail'

export const SavedComponent = () => {
  const user = useUser()
  const boards = user?.data?.boards

  return (
    <div className='flex flex-wrap gap-2 justify-center flex-1 p-2' >
      {boards && boards.map(el => {
        return (
          <BoardThumbnailComponent key={el.uuid} props={el}/>
        )
      })}
    </div>
  )
}