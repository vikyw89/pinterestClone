import { Page } from '@/common/layout/page'
import { DetailCardComponent } from '@/components/pin/[pin_uuid]/detailCard'
import { useAuth } from '@/lib/hooks/useAuth'
import { usePin } from '@/lib/hooks/usePin'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/router'
import useSWRImmutable from 'swr/immutable'

const PinDetail = () => {
  const auth = useAuth()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinData = usePin(pin_uuid)
  // const pinData = useSWRImmutable(auth.data && pin_uuid && `pin/${pin_uuid}`, async () => {
  //   const response = await supabase
  //     .from('pins')
  //     .select(`
  //           *,
  //           users(*,users_followers!users_followers_user_uuid_fkey(count)),
  //           pins_comments(*,users(*))
  //           `)
  //     .eq('uuid', pin_uuid)
  //     .eq('pins_comments.pin_uuid', pin_uuid)
  //   const pinData = response.data[0]
  //   return pinData
  // })

  return (
    <Page>
      {auth.data && pin_uuid && pinData &&
        <DetailCardComponent />
      }
    </Page>
  )
}

export default PinDetail