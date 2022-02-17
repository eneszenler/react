import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import User from './components/User'
import Counter from "./components/Counter";

const name = "Yusuf";
const surname = "Zenler";
const isLoggedIn = true;
const friends = [
    {
        name: "Yusuf",
        surname: "Zenler",
    },
    {
        name: "Mehmet",
        surname: "asljbflaks",
    },
    {
        name: "kandss",
        surname: "csknlk",
    },
    {
        name: "adnasd",
        surname: "alkndsl",
    },
    {
        name: "alks",
        surname: "alksdnaşkdn",
    },
]

function App() {
    return <>
        <div className='App'>
            <Header />

            <h1>React</h1>
            <h2>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : `Giriş Yapmadınız`}</h2>

            <User
                name="Yusuf Enes"
                surname="Zenler"
                isLogged={true} 
                age={21}
                friends={friends}
                address={{
                    city: "Antalya",
                    zip: "07"
                }}
            />

            <User
                name="lorem"
                surname="ipsum"
                isLogged={true} 
                age={22}
                friends={friends}
                address={{
                    city: "Antalya",
                    zip: "07"
                }}
            />

            <Counter/>
        </div>
    </>;
}

export default App;