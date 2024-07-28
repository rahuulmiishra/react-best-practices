import { useState } from "react";

/*

 things to discuss:
  1. StackTrace
  2. Memoization
  3. Data-Set
  4. Currying

*/
const Data = [
  { id: 2, name: "JS" },
  { id: "21", name: "React" },
  { id: 90, name: "Vue" },
];
function KeyProp() {
  const [list, setList] = useState(Data);

  function handleRemove(index) {
    return () => {
      const old = structuredClone(list);
      old.splice(index, 1);
      setList(old);
    };
  }

  return (
    <div className="card blue">
      <h1>🔑 Key Prop</h1>
      {list.map((d, index) => {
        return (
          <div className="input-btn" key={d.id}>
            <input type="text" />
            <button onClick={handleRemove(index)}>Remove {d.name}</button>
          </div>
        );
      })}

      <button>Send Data</button>
    </div>
  );
}

export default KeyProp;
