import {useState} from 'react';

function Counter() {
    const [count, setcount] = useState(0);

    const onIncrease = () => {
        setcount(count+1)
    };
    const onDecrease = () => {
        setcount(count-1)
    };

  return <div>
      <h1 style={{textAlign: "center"}}>{count}</h1>
      <button onClick={onIncrease}>Arttır</button>
      <button onClick={onDecrease}>Azalt</button>
  </div>;
}

export default Counter;
