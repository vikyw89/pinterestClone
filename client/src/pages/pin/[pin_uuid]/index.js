import { Page } from '@/common/layout/page'
import { DetailCardComponent } from '@/components/pin/[pin_uuid]/detailCard'
import { useAuth } from '@/lib/hooks/useAuth'
import { usePin } from '@/lib/hooks/usePin'
import { useRouter } from 'next/router'

const PinDetail = () => {
  const auth = useAuth()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinData = usePin(pin_uuid)

  return (
    <Page>
      {auth.data && pin_uuid && pinData &&
        <DetailCardComponent />
      }
    </Page>
  )
}

export default PinDetail