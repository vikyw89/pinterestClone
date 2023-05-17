
import { Page } from "@/common/layout/page"
import { useRouter } from "next/router"

const BoardContent = () => {
    const router = useRouter()
    console.log("🚀 ~ file: index.js:6 ~ BoardContent ~ router:", router)
    const { board_uuid } = router.query
    return (
        <Page>

        </Page>
    )
}

export default BoardContent