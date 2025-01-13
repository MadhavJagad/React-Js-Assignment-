import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  const increment = () => {
    setCount(count + 1);
  };

  const logRenderCount = () => {
    alert(`Component rendered ${renderCount.current} times`);
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Count: {count}</h1>
        <button
          onClick={increment}
          style={{ margin: "5px", padding: "10px" }}
        >
          Increment Count
        </button>
        <button
          onClick={logRenderCount}
          style={{ margin: "5px", padding: "10px" }}
        >
          Show Render Count
        </button>
      </div>
    </>
  );
};

export default App;
