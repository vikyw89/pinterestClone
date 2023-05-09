import { Page } from "@/common/layout/page"
import { DetailCardComponent } from "@/components/pin/[pin_uuid]/detailCard"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { setAsyncV } from "use-sync-v"

const PinDetail = () => {
    const router = useRouter()
    const { pin_uuid } = router.query
    const [pin, setPin] = useState()
    console.log("🚀 ~ file: index.js:12 ~ PinDetail ~ pin:", pin)

    useEffect(() => {
        setAsyncV('downloadPinDetail', async () => {
            const response = await supabase
                .from('pins')
                .select(`
                *,
                pins_comments(*),
                users(*)
                `)
                .eq('uuid', pin_uuid)
            const pinData = response.data[0]
            setPin(pinData)
            return pinData
        })
    }, [pin_uuid])
    return (
        <Page>
            <div className="flex justify-center h-screen p-5">
                {pin && <DetailCardComponent props={{ pin, setPin }} />}
                {!pin && <div className="w-96 ">
                    <div className="animate-pulse w-96 h-96 rounded-3xl bg-neutral-focus">
                    </div>
                </div>}
            </div>
        </Page>
    )
}

export default PinDetail