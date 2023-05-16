import Image from "next/image"
import { useSyncV } from "use-sync-v"

export const BoardThumbnailComponent = ({ props }) => {
    console.log("🚀 ~ file: index.js:4 ~ BoardThumbnailComponent ~ props:", props)
    const boardPins = props.boards_pins
    const thumbnails = [...boardPins.slice(-4)]
    return (
        <div className="flex flex-col justify-center gap-2 text-base-content hover:animate-pulse hover:cursor-pointer">
            <div className="w-72 aspect-square bg-neutral-focus rounded-box" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridAutoRows: '1fr'
            }}>
                {thumbnails && 
                    thumbnails.map(el => {
                        console.log("🚀 ~ file: index.js:18 ~ BoardThumbnailComponent ~ el:", el)
                        return (
                            <div className="relative aspect-square">
                                <Image
                                    fill={true}
                                    placeholder="blur"
                                    alt={el.pins.image_url}
                                    blurDataURL={el.pins.loading_image_url}
                                    src={el.pins.image_url}
                                    className="aspect-square object-cover rounded-box"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center font-bold" 
            style={{
                gridColumn:'1 / -1'
            }}>{props.title}</div>
        </div>
    )
}   