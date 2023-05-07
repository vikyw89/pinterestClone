import Image from "next/image"

export const PinComponent = () => {
    
  return (
    <div className="flex flex-col relative">
        <Image
            src="../google-logo.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            />
            test
    </div>
  )
}