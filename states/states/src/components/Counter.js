import { useState, useEffect } from 'react'

function Counter() {
    const [number, setnumber] = useState(0)
    const [name, setname] = useState("Yusuf")

    useEffect(() => {
        console.log("Number State'i Güncellendi!")
    }, [number])

    useEffect(() => {
        console.log("Name State'i Güncellendi!")
    }, [name])

    useEffect(() => {
        console.log("Component Mount Edildi!");
        const interval = setInterval(() => {
            setnumber((n) => n + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <div className="App">
                <h1>{number} </h1>
                <button onClick={() => setnumber(number + 1)}>Click</button>
                <hr />
                <h1>{name} </h1>
                <button onClick={() => setname("Enes")}>Click</button>
            </div>
        </div>
    )
}

export default Counter
