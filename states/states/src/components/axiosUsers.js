import { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setusers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setloading(false))
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {
                loading && <div>Loading...</div>
            }
            {
                users.map((user) => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Users
