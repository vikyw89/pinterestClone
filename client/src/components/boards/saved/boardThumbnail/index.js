import Image from 'next/image'
import { useRouter } from 'next/router'
import { v4 } from 'uuid'

export const BoardThumbnailComponent = ({ props }) => {
  const router = useRouter()
  const boardPins = props.boards_pins
  const thumbnails = [...boardPins.slice(-4)]
  const boardClickHandler = () => {
    const targetNav = props.uuid
    router.push(`/profile/${targetNav}`)
  }
  return (
    <div className="flex flex-col justify-center gap-2 text-base-content hover:animate-pulse hover:cursor-pointer" onClick={boardClickHandler}>
      <div className="w-72 aspect-square bg-neutral-focus rounded-box" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '1fr'
      }}>
        {thumbnails &&
          thumbnails.map(el => {
            return (
              <div key={v4()} className="relative aspect-square">
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
          gridColumn: '1 / -1'
        }}>{props.title}</div>
    </div>
  )
}