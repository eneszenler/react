///////// FORMİK ///////////

// import logo from './logo.svg';
// import './App.css';
// import Signup from "./components/Signup";

// function App() {


//   return (
//     <div className='App'>
//       <Signup />
//     </div>
//   );
// }

// export default App;

///////// MEMOIZATION /////////
import { useState, useMemo, useCallback } from 'react'
import "./App.css"
import Header from "./components/Header"

function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return { name: "Yusuf" }
  }, []);

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, []);

  return (
    <div className='App'>
      <Header number={number < 5 ? 0 : number} data={data} increment={increment} />

      <hr />

      <h1>{number}</h1>
    </div>
  )
}

export default App

