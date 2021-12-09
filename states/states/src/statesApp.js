import { useState } from "react";
import Counter from "./components/statesCounter";
import InputExample from "./components/statesInputExample";

function App() {
  const [name, setname] = useState("Yusuf");
  const [age, setage] = useState(21);
  const [friends, setfriends] = useState(["Ahmet", "Burak"])
  const [address, setaddress] = useState({ title: "İstanbul", zip: "34044" })

  console.log(age, name);

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>

      <button onClick={() => setname("Burak")}>Change Name</button>
      <button onClick={() => setage(24)}>Change Age</button>

      <hr />
      <h2>Friends</h2>
      {friends.map((friend, index) => (<div key={index}>{friend}</div>))}
      <button onClick={() => setfriends([...friends, "Ayşe"])}>Add New Friend</button>

      <hr />
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <button onClick={() => setaddress({ title: "Ankara", zip: "06060" })}>New Address</button>
      <hr />
      <Counter />
      <hr />
      <InputExample />



    </div>
  );
}

export default App;
