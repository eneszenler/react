import { useState } from 'react'

const defaultItems = [
    {
        name: "Item A"
    },
    {
        name: "Item B"
    },
]

function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);

    const handleSubmit = () => {
        setItems([...items, { name: text }])
        setText("")
    }

    return (
        <div>
            <label>
                Text
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button onClick={handleSubmit}>Add</button>
            <br /><br />
            <div>
                <ul>
                    {
                        items.map((item, key) => {
                            return (
                                <li key={key}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo