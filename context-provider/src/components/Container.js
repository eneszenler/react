import { useContext } from 'react'
import '../App.css';
import Button from './Button'
import Header from './Header'

import ThemeContext from '../context/ThemeContext';
import Profile from './Profile';

function Container() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <Button />
            <hr />
            <Header />
            <hr />
            <Profile />
        </div>
    )
}

export default Container