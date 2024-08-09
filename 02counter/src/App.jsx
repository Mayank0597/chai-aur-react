import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    // console.log("value added", Math.random());
    counter += 1;
    console.log("clicked", counter);
    setCounter(counter);
  };

  const removeValue = () => {
    counter -= 1;
    console.log("clicked", counter);
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter Value :{counter} </h2>
      <button onClick={addValue}>
        Add Value
        {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        Remove Value
        {counter}
      </button>
    </>
  );
}

export default App;
