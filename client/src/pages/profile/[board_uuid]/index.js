
import { Page } from "@/common/layout/page"
import { useRouter } from "next/router"

const BoardContent = () => {
    const router = useRouter()
    const { board_uuid } = router.query
    return (
        <Page>

        </Page>
    )
}

export default BoardContent