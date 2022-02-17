import React from 'react'
import "./App.css"
import A from "./components/A";
import B from "./components/B";

function Module() {
    return (
        <div className='Module'>
            <header className='Module-header'>
                <A />
                <B />
            </header>
        </div>
    )
}

export default Module
