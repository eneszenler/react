import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import User from './components/User'

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
        surname: "Subaşı",
    },
    {
        name: "Yahya",
        surname: "Yılmaz",
    },
    {
        name: "Ceyda",
        surname: "Çabaz",
    },
    {
        name: "Pındar",
        surname: "Gülmez",
    },
]

function App() {
    return <>
        <div>
            <Header/>

            <h1>React</h1>
            <h2>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : `Giriş Yapmadınız`}</h2>

            <User 
            name="Yusuf Enes" 
            surname="Zenler" 
            // isLogged={true} 
            age={21}
            friends={friends}
            address= {{
                city: "Antalya",
                zip: "07"
            }}
            />
        </div>
    </>;
}

export default App;