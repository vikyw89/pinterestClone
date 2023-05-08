import Image from "next/image"
import { useEffect, useId } from "react"

export const PinComponent = ({ handler }) => {
    const id = useId()
    return (
        <div className="flex flex-col relative">
            <Image
                src="../google-logo.png"
                alt="pinImage"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
            />
        </div>
    )
}