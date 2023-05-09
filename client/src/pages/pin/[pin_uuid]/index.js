import { Page } from '@/common/layout/page'
import { DetailCardComponent } from '@/components/pin/[pin_uuid]/detailCard'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setAsyncV, useAsyncV } from 'use-sync-v'

const PinDetail = () => {
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = useAsyncV('pinDetail')

  useEffect(() => {
    if (!pin_uuid) return
    setAsyncV('pinDetail', async () => {
      const response = await supabase
        .from('pins')
        .select(`
                *,
                users(*,users_followers!users_followers_user_uuid_fkey(count)),
                pins_comments(*,users(*))
                `)
        .eq('uuid', pin_uuid)
        .eq('pins_comments.pin_uuid', pin_uuid)
      const pinData = response.data[0]
      return pinData
    })
  }, [pin_uuid])
  return (
    <Page>
      {auth.data &&
                <div className="flex justify-center h-screen p-5">
                  {pinDetail.data && <DetailCardComponent />}
                  {pinDetail.loading && <div className="w-96 ">
                    <div className="animate-pulse w-96 h-96 rounded-3xl bg-neutral-focus">
                    </div>
                  </div>}
                </div>
      }
    </Page>
  )
}

export default PinDetail