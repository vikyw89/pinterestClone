import { useAuth } from '@/lib/hooks/useAuth'
import { supabase } from '@/lib/supabase'
import ClearIcon from '@mui/icons-material/Clear'
import Image from 'next/image'
import { mutate } from 'swr'

export const CommentComponent = ({ props }) => {
  const { users, comment, uuid: comment_uuid, pin_uuid } = props
  const auth = useAuth()
  const user_uuid = auth?.data?.user?.id
  const isCommentCreator = user_uuid === users.uuid

  const deleteComment = async (e) => {
    e.currentTarget.classList.add('btn-disabled', 'animate-spin')
    await mutate(`api/pin/${pin_uuid}`, async () => {
      await supabase
        .from('pins_comments')
        .delete()
        .eq('uuid', comment_uuid)
        .eq('creator_uuid', user_uuid)
        .select()
        .throwOnError()
    }, { populateCache: false })
  }
  return (
    <div className="flex gap-2 p-2 w-full max-w-lg relative">
      <Image
        src={users.profile_picture_url}
        alt="profile_picture"
        height={0}
        width={0}
        sizes="100vw"
        className="w-8 h-8 aspect-square rounded-full"
      />
      <div className="flex w-full max-w-lg flex-wrap">
        <span className="font-bold">{users.username} :&nbsp;&nbsp;</span>
        <p className="break-all">{comment}</p>
      </div>
      {isCommentCreator &&
        <button className='btn btn-circle btn-ghost absolute top-0 right-0'
          onClick={deleteComment}>
          <div>
            <ClearIcon className='text-3xl font-bold text-info' />
          </div>
        </button>
      }
    </div>
  )
}