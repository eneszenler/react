import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import User from './User';


function Users() {
    const [loading, setloading] = useState(true)
    const [users, setusers] = useState([]);

    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setusers(res.data))
            .finally(() => setloading(false))
    }, [])

    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Loading...</div>}
            <ul>
                {
                    users.map((user) => (
                        <li>
                            <Link to={`${url}/${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User} />
            </Switch>

        </div>
    )
}

export default Users
