import { useState } from 'react'

const initialFormValues = { todo: "" }

function Form({ addTodos, todos, active, addActive, filteredList, setfilteredList }) {
    const [form, setform] = useState(initialFormValues)

    const onChangeInput = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.todo === "") {
            return false;
        }

        addTodos([...todos, form]);
        addActive([...active, form]);
        setfilteredList([...todos, form])
        setform(initialFormValues);
    };

    return (
        <div className="contain">
            <form onSubmit={onSubmit}>
                <input
                    className="new-todo"
                    name="todo"
                    placeholder="What needs to be done?"
                    onChange={onChangeInput}
                    value={form.todo}
                />
                <button id="button">Submit</button>
            </form>
        </div>
    )
}

export default Form
