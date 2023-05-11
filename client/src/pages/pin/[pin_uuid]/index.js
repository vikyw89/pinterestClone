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

  useEffect(() => {
    if (!auth.data || !pin_uuid) return
    setAsyncV(`pin.${pin_uuid}`, async () => {
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
  }, [pin_uuid, auth.data])

  return (
    <Page>
      {auth.data && pin_uuid &&
        <div className="flex justify-center p-5">
          <DetailCardComponent />
        </div>
      }
    </Page>
  )
}

export default PinDetail