import { FeedsComponent } from '@/components/feed'
import { useBoard } from '@/lib/hooks/useBoard'

export const CreatedComponent = () => {
  const { data: allCreatedPins } = useBoard('all pins')
  return (
    <div className="flex justify-center flex-1 items-center w-full">
      {allCreatedPins &&
        < FeedsComponent props={{ feeds: allCreatedPins, infinite: false, refetchFn: () => undefined }} />
      }
    </div>
  )
}