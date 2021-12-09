import {useState} from 'react'

function InputExample() {
    const [form, setform] = useState({name:"",surname:""})
    
    const onChaneInput = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Name</h2>
            <input name="name" value={form.name} onChange={onChaneInput}/>
            <h2>Surname</h2>
            <input name="surname" value={form.surname} onChange={onChaneInput}/>
            <br />
            <h3>{form.name} {form.surname}</h3>
        </div>
    )
}

export default InputExample
