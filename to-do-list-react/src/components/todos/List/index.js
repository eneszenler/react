import { useState } from 'react'

function List({ todos, active, completed, delTodos, setCompleted, setActive, filteredList, setfilteredList }) {

    const handleRemoveItem = i => {
        const temp = [...todos];
        temp.splice(i, 1);
        delTodos(temp);
        setActive(temp)
        setfilteredList(temp)
    }

    const filtered = filteredList;

    return (
        <div>
            <div>
                <br />
                <ul className="list-box">
                    {filtered.map((item, i) => (
                        <li className="list-item" key={i}>
                            <div className="li-container">
                                <span>
                                    <span className="round">
                                        <input type="checkbox" />
                                        <label></label>
                                    </span>
                                    <span className="textSub">
                                        {item.todo}
                                    </span>
                                </span>

                                <span className="buttonHolder" >
                                    <button className="deleteBtn" name={item.todo} onClick={() => handleRemoveItem(i)}>x</button>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="left">
                <p>{active.length} Items Left</p>
            </div>
            <div className="filterMenu">
                <button className="filterButton" onClick={() => setfilteredList([...todos])}>All</button>
                <button className="filterButton" onClick={() => setfilteredList([...active])}>Active</button>
                <button className="filterButton" onClick={() => setfilteredList([...completed])}>Completed</button>
            </div>

        </div >
    )
}

export default List
