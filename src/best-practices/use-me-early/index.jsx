import { useReducer, useState } from "react";

function reducerFunction(prevState, newValue) {
  return { ...prevState, ...newValue };
}

function UseMeEarly() {
  const [name, setName] = useReducer(reducerFunction, {});

  function handleSubmit() {
    console.log({ name });
  }

  function handleA1Change(e) {
    setName({ a1: e.target.value });
  }

  function handleA2Change(e) {
    setName({ a2: e.target.value });
  }

  function handleNameChange(e) {
    setName({ name: e.target.value });
  }

  return (
    <div className="card green">
      <h1>🥇 First thing first</h1>
      <input onChange={handleNameChange} type="text" placeholder="Name" />
      <input onChange={handleA1Change} type="text" placeholder="Name" />
      <input onChange={handleA2Change} type="text" placeholder="Name" />

      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
}

export default UseMeEarly;
