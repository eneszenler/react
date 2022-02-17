import { useState } from "react"
import Counter from "./components/Counter"

function useEffect() {
    const [isVisible, setisVisible] = useState(true)

    return (
        <div className="useEffect">
            {isVisible && <Counter />}

            <button onClick={() => setisVisible(!isVisible)}>Toggle Counter</button >
        </div >
    )
}

export default useEffect
