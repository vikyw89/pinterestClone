import { FeedsComponent } from "@/components/feed"
import { useBoard } from "@/lib/hooks/useBoard"

export const CreatedComponent = () => {
  const { data: allCreatedPins } = useBoard('all pins')
  console.log("🚀 ~ file: index.js:5 ~ CreatedComponent ~ allCreatedPins:", allCreatedPins)

  return (
    <div className="flex justify-center flex-1 items-center">
      {allCreatedPins &&
        < FeedsComponent props={{ feeds: allCreatedPins, infinite: false, refetchFn: () => undefined }} />
      }
    </div>
  )
}