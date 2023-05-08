import { useEffect, useId, useState } from "react"
import { PinComponent } from "./pin"
import { useSyncV } from "use-sync-v"


export const PinColumnComponent = () => {
    const [pinsToDisplay, setPinsToDisplay] = useState([])
    useEffect(() => {
        setPinsToDisplay([<PinComponent key={0} handlers={{
            setPinsToDisplay: setPinsToDisplay
        }} />])
    }, [])
    return (
        <div className="column-container w-72 h-max" style={{ border: '5px solid black' }}>
            {pinsToDisplay}
        </div>
    )
}