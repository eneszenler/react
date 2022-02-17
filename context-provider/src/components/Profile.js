import { useContext, useState } from 'react'

import UserContext from "../context/UserContext"

function Profile() {
    const { user, setUser } = useContext(UserContext);

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setUser({
                id: 1,
                username: "Yusuf",
                bio: "lorem ipsum doler",
            });
        }, 1500)
    };

    const handleLogout = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setUser(null);
        }, 750)
    };

    return (
        <div>

            <code>
                {JSON.stringify(user)}
            </code>
            <br />
            {
                !user && <button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>
            }
            {
                user && <button onClick={handleLogout}>{loading ? "loading..." : "Logout"}</button>
            }

        </div>
    )
}

export default Profile