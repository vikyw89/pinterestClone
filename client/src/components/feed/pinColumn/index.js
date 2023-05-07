import { useEffect, useId, useState } from "react"
import { PinComponent } from "./pin"

export const PinColumnComponent = () => {
    const id = useId()
    console.log("🚀 ~ file: index.js:6 ~ PinColumnComponent ~ id:", id)
    
    const [pinToDisplay, setPinToDisplay] = useState([])
    console.log("🚀 ~ file: index.js:6 ~ PinColumnComponent ~ pinToDisplay:", pinToDisplay)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const intersecting = entry.isIntersecting
                console.log("🚀 ~ file: index.js:12 ~ observer ~ intersecting:", intersecting)
                if (!intersecting) return
                // TODO
                // push another card to Array
                setPinToDisplay(p => {
                    return [
                        ...p,
                        <PinComponent key={p.length} />
                    ]
                })
            })
        })
        const pinColumn = document.querySelector(`#${CSS.escape(id)}`)
        observer.observe(pinColumn)
    }, [])
    return (
        <div id={id} className="column-container w-72">
            {pinToDisplay}
        </div>
    )
}