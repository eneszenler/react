import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button({ children }) {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            Active Theme: {theme}
            <hr />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    )
}

export default Button