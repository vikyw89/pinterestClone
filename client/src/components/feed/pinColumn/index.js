import { useEffect, useId, useState } from "react"
import { PinComponent } from "./pin"


export const PinColumnComponent = () => {
    const id = useId()
    const [pinToDisplay, setPinToDisplay] = useState([])
    useEffect(() => {
        const pinColumn = document.querySelector(`#${CSS.escape(id)}`)
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log("🚀 ~ file: index.js:11 ~ observer ~ entry:", entry)
                const intersecting = entry.intersectionRatio
                console.log("🚀 ~ file: index.js:12 ~ observer ~ intersecting:", intersecting)
                if (intersecting !== 1) return
                // TODO
                // push another card to Array
                setPinToDisplay(p => {
                    return [
                        ...p,
                        <PinComponent key={p.length} />,
                        <PinComponent key={p.length + 1} />,
                        <PinComponent key={p.length + 2} />,
                        <PinComponent key={p.length + 3} />,
                        <PinComponent key={p.length + 4} />,
                        <PinComponent key={p.length + 5} />,
                        <PinComponent key={p.length + 6} />,
                        <PinComponent key={p.length + 7} />,
                        <PinComponent key={p.length + 8} />
                    ]
                })
            })
        })
        observer.observe(pinColumn)
        return () => {
            observer.unobserve(pinColumn)
        }
    }, [])
    return (
        <div id={id} className="column-container w-72 h-max" style={{ border: '5px solid black' }}>
            {pinToDisplay}
        </div>
    )
}