import { Page } from "@/common/layout/page";
import { useAsyncV } from "use-sync-v";

export default function Profile (){
    const auth = useAsyncV('auth')
    
    return (
        <Page>
            <div className="flex justify-center">
                test
            </div>
        </Page>
    )
}