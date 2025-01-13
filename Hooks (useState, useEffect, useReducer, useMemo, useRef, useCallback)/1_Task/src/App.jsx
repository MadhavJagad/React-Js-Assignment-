import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Counter: {count}</h2>
        <button
          onClick={increment}
          style={{ margin: "5px", padding: "10px" }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{ margin: "5px", padding: "10px" }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default App;
