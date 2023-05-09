import { useAsyncV } from "use-sync-v"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";

export const DetailCardComponent = () => {
    const pin = useAsyncV('pinDetail')
    console.log("🚀 ~ file: index.js:5 ~ DetailCardComponent ~ pin:", pin)
    return (
        <div className="bg-neutral rounded-3xl flex flex-wrap p-10 h-fit gap-5">
            <div className="w-96 aspect-auto rounded-3xl bg-neutral-focus h-fit">
                <Image
                    src={pin.data.image_url}
                    alt="pinImage"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full aspect-auto"
                />
            </div>
            <div className="flex flex-col w-96 ">
                <div className="flex">
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    )
}