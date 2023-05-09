import { Page } from "@/common/layout/page"
import { useRouter } from "next/router"

const PinDetail = () => {
    const router = useRouter()
    const pin_uuid = router.query
    return (
        <Page>
            test
        </Page>
    )
}

export default PinDetail