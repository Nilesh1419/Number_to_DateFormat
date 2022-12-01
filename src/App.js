import "./styles.css";
import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h2>Number into Date Format</h2>
      <UserInput />
    </div>
  );
}

// function UserInput() {
//   const [input, setInput] = useState(null);
//   const [state, setState] = useState();
//   const [validate, setValidate] = useState(null);

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.length !== 8) {
//       setValidate("Error");
//       return;
//     }

//     let newInput = `${input.substring(0, 2)} / ${input.substring(
//       2,
//       4
//     )} / ${input.substring(4, 8)}`;
//     setState(newInput);
//   };
//   return (
//     <div>
//       <input type="number" value={input} onChange={handleInput} />
//       <button onClick={handleSubmit}>+</button>
//       <h2>{state}</h2>
//       <h2>{validate}</h2>
//     </div>
//   );
// } REVESION--->

const UserInput = () => {
  const [input, setInput] = useState(null);
  const [state, setState] = useState();
  const [validate, setValidate] = useState(null);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== 8) {
      setValidate("8 numbers requird");
    }

    let newInput = `${input.substring(0, 2)}/${input.substring(
      2,
      4
    )}/${input.substring(4, 8)}`;
    setState(newInput);
  };
  return (
    <div>
      <input type="number" value={input} onChange={handleInput} />
      <button onClick={handleSubmit}>Convert</button>
      <br />
      <br />
      {state}
      <br />
      <br />
      <div> {validate}</div>
    </div>
  );
};
