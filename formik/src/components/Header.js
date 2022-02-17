import React from 'react'

function Header({ number, data, increment }) {
    console.log("Header re-Render Edildi");
    return (
        <div>
            Header - {number}

            <br />
            <code>{JSON.stringify(data)}</code>

            <br />
            <button onClick={increment}>Click!</button>

        </div>
    )
}

export default React.memo(Header)
