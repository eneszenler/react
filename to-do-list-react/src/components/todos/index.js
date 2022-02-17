import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"

function Todos() {
    const defaultList = [
        {
            todo: "Task 1",
            status: false
        },
        {
            todo: "Task 2",
            status: false
        },
        {
            todo: "Task 3",
            status: false
        },
        {
            todo: "Task 4",
            status: false
        },]

    const [todos, setTodos] = useState(defaultList);
    const [active, setActive] = useState(defaultList)
    const [completed, setCompleted] = useState([{todo:"",status:""}])
    const [filteredList, setfilteredList] = useState(todos)

    useEffect(() => {
        console.log("active", active);
    }
        , [active])
    useEffect(() => {
        console.log("todo", todos);
    }
        , [todos])
    useEffect(() => {
        console.log("completed", completed);
    }
        , [completed])
    return (
        <div className="main">
            <div>
                <h1>todos</h1>
            </div>
            <div className="header">
                <Form addTodos={setTodos}
                    todos={todos}
                    active={active}
                    addActive={setActive}
                    filteredList={filteredList}
                    setfilteredList={setfilteredList}
                />
            </div>
            <div>
                <List todos={todos}
                    delTodos={setTodos}
                    active={active}
                    completed={completed}
                    setCompleted={setCompleted}
                    setActive={setActive}
                    filteredList={filteredList}
                    setfilteredList={setfilteredList}
                />
            </div>
        </div>
    )
}

export default Todos
