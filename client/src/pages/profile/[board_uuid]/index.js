import { Page } from '@/common/layout/page'
import { useBoard } from '@/lib/hooks/useBoard'
import { useRouter } from 'next/router'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import { FeedsComponent } from '@/components/feed'

const BoardContent = () => {
  const router = useRouter()
  const { board_uuid } = router.query
  const board = useBoard(board_uuid)
  const board_title = board?.data?.title
  const board_description = board?.data?.description
  const board_members = board?.data?.boards_members
  // const board_comments = board?.data?.boards_comments
  const board_pins = board?.data?.boards_pins && board?.data?.boards_pins.reduce((p, c) => {
    return [...p, c.pins]
  }, [])
  return (
    <Page>
      {board.data &&
        <div className='flex justify-center bg-base-200 text-base-content'>
          {/* board_data */}
          <div className='flex flex-col p-5 gap-5'>
            {/* board_name */}
            <div className='flex gap-4 items-center'>
              <div className='font-bold text-4xl'>
                {board_title}
              </div>
              <button className='btn btn-circle btn-secondary btn-xs'>
                <div>
                  <MoreHorizIcon fontSize='small' />
                </div>
              </button>
            </div>
            {/* board_description */}
            <div>
              {board_description}
            </div>
            {/* avatar group */}
            <div className="avatar-group -space-x-6 flex justify-center">
              {board_members.map((e,i) => {
                const avatar_url = e?.users?.profile_picture_url
                return (
                  <div key={i} className="avatar">
                    <div className="w-12 relative aspect-square">
                      <Image
                        src={avatar_url}
                        alt={avatar_url}
                        height={300}
                        width={300}
                        style={{
                          height: 'auto'
                        }}
                      />
                    </div>
                  </div>
                )
              })}
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral-focus text-neutral-content">
                  <AddIcon />
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* board+pins */}
      <div className='flex-1 bg-base-200 text-base-content'>
        {board_pins && < FeedsComponent props={{ feeds: board_pins, infinite: false, refetchFn: () => undefined }} />}
      </div>
    </Page>
  )
}

export default BoardContent