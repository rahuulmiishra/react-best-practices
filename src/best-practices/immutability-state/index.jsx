import { useState } from "react";

/*

 things to discuss:
  1. StackTrace
  2. Memoization
  3. Data-Set
  4. Currying

*/
const Data = [
  { id: 2, name: "JS", value: "" },
  { id: "21", name: "React", value: "" },
  { id: 90, name: "Vue", value: "" },
];
function ImmutabilityState() {
  const [list, setList] = useState(structuredClone(Data));

  function updateNameAtIndex(index) {
    return () => {
      const old = [...list];
      old[index].name = old[index].value;
      old[index].value = "";
      setList(old);
    };
  }

  function handleInput(index) {
    return (e) => {
      const old = [...list];

      old[index].value = e.target.value;
      setList(old);
    };
  }

  return (
    <div className="card green">
      <h1>🦹‍♀️ Immutability</h1>
      {list.map((d, index) => {
        return (
          <div key={index}>
            <input onInput={handleInput(index)} type="text" value={d.value} />
            <button onClick={updateNameAtIndex(index)}>Update {d.name}</button>
          </div>
        );
      })}
      <ChildForm />
      <button>Send Data</button>
    </div>
  );
}

function ChildForm() {
  return (
    <div>
      <h4>
        This is Child From, another component which utilized data constant
      </h4>
      {Data.map((d, index) => {
        return <div key={index}>{d.name}</div>;
      })}
    </div>
  );
}

export default ImmutabilityState;
