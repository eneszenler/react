import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';


function User() {
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setuser(res.data))
            .finally(() => setloading(false))
    }, [id])
    return (
        <div>
            <h1>User Detail</h1>
            {loading && <div>Loading...</div>}
            <pre>{JSON.stringify(user)}</pre>

            <br />
            <br />

            <Link to={`/users/${parseInt(id) - 1}`}>
                Previous User ({parseInt(id) - 1})
            </Link>
            <Link to={`/users/${parseInt(id) + 1}`}>
                Next User ({parseInt(id) + 1})
            </Link>
        </div>
    )
}

export default User
