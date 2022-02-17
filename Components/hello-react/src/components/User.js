import PropTypes from "prop-types";
import { Component } from "react";

function User({ name, surname, isLogged, age, friends, address }) {
    return (
        <>

            <ul>
                <li>İsim: {name}</li>
                <li>Soyisim: {surname}</li>
                <li>Yaş: {age}</li>
            </ul>
        </>
    )
}

export default User;