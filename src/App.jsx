import React, { useState } from "react";

const App = () => {
  const [value, setvalue] = useState(0);
  const i = () => {
    setvalue(value + 1);
  };
  const d = () => {
    if (value <= 0) {
      {
        alert("LIMIT TO 0");
      }
      setvalue(value);
    } else {
      setvalue(value - 1);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{value}</h1>
          <button id="d" onClick={d}>
            Decre
          </button>
          <button id="i" onClick={i}>
            Incre
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
