import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"

function Contacts() {
    const [contacts, setcontacts] = useState([
        {
            fullname: "Ahmet Can",
            phone_number: 5072647878
        },
        {
            fullname: "Pınar Yılmaz",
            phone_number: 5397874578
        },
        {
            fullname: "Yusuf Şen",
            phone_number: 5364572123
        },
        {
            fullname: "Enes Bozkurt",
            phone_number: 5623698545
        },
        {
            fullname: "Damla Turan",
            phone_number: 5624257841
        },
        {
            fullname: "Hasan Cabaz",
            phone_number: 5623691010
        },
        {
            fullname: "Gözde Şengün",
            phone_number: 5453809210
        },
        {
            fullname: "Arda Erkin",
            phone_number: 5393651020
        },
    ])

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="container">
            <h1>Contacts App</h1>
            <List contacts={contacts} />
            <Form addContact={setcontacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
