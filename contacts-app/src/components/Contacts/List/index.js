import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setfilterText] = useState("")

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase()));
    });

    console.log(filtered);
    return (
        <div>
            <input
                placeholder="Filter Contact"
                value={filterText}
                onChange={(e) => setfilterText(e.target.value)}
            />
            <div className="box">
                <ul className="list">
                    {filtered.map((contact, i) => (
                        <li key={i}>
                            <span>{contact.fullname}</span>
                            <span>{contact.phone_number}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Total Contacts ({filtered.length})</p>
            </div>
        </div>
    );
}

export default List;
