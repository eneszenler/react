import PropTypes from "prop-types";

function User({name, surname, isLogged, age, friends, address}) {
    if (!isLogged) {
            return <div>Giriş Yapmadınız</div>
        }
    
    return (
        <>
            <h1>
                {name} {surname} {age}
                <br />
                {address.city} {address.zip}
            </h1>
            <ul>
                {
                    friends.map((friend, index) => <li key={index}>{`${friend.name} ${friend.surname}`}</li>)
                }
            </ul>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    isLogged: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({
        city: PropTypes.string,
        zip: PropTypes.string
    })
}

User.defaultProps = {
    isLogged: true,
}

export default User;