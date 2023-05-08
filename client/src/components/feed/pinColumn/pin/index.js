import Image from "next/image"
import { useEffect, useId } from "react"

export const PinComponent = ({ handlers }) => {
    const id = useId()
    useEffect(() => {
        const pin = document.querySelector(`#${CSS.escape(id)}`)
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const intersecting = entry.isIntersecting
                console.log("🚀 ~ file: index.js:11 ~ observer ~ intersecting:", intersecting)
                if (!intersecting) return
                // TODO
                // push another card to Array
                handlers.setPinsToDisplay(p => {
                    return [...p, <PinComponent key={p.length} handlers={{ setPinsToDisplay: handlers.setPinsToDisplay }} />]
                })
            })
        })
        observer.observe(pin)
        return () => {
            observer.unobserve(pin)
        }
    })
    return (
        <div id={id} className="flex flex-col relative">
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