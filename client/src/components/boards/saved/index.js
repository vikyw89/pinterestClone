import { useEffect } from 'react'
import { useAsyncSubV, useAsyncV } from 'use-sync-v'
import { v4 } from 'uuid'
import { BoardThumbnailComponent } from './boardThumbnail'
import { useUser } from '@/lib/hooks/useUser'

export const SavedComponent = () => {
  const user = useUser()
  console.log("🚀 ~ file: index.js:9 ~ SavedComponent ~ user:", user)
  const boards = user?.data?.boards
  let allPinsBoard
  if (boards) {
    allPinsBoard = boards.reduce((p, c) => {
      if (!p) {
        p = c
      }
      p = {
        ...p,
        boards_pins: [
          ...p.boards_pins,
          ...c.boards_pins
        ],
        title: 'All Pins',
        uuid: 'pins'
      }
      return p
    }, undefined)
  }

  return (
    <div className='flex flex-wrap gap-2 justify-center flex-1 p-2' >
      {allPinsBoard &&
        <BoardThumbnailComponent key={v4()} props={allPinsBoard}/>
      }
      {boards && boards.map(el => {
        return (
          <BoardThumbnailComponent key={el.uuid} props={el}/>
        )
      })}
    </div>
  )
}