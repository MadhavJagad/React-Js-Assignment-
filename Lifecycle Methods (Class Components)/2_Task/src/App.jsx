import React, { useState } from "react";
import LifecycleLogger from "./LifecycleLogger";

export default function App() {
  const [showLogger, setShowLogger] = useState(true);
  return (
    <>
      <div>
        <button onClick={() => setShowLogger((prev) => !prev)}>
          {showLogger ? "Unmount Logger" : "Mount Logger"}
        </button>
        {showLogger && <LifecycleLogger />}
      </div>
    </>
  );
}
