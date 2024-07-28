import { useRef, useState } from "react";

const Data = [
  { id: 2, name: "JS" },
  { id: "21", name: "React" },
  { id: 90, name: "Vue" },
];
function RefList() {
  const [list, setList] = useState(Data);

  const parentRef = useRef();

  const listRefs = useRef([]);

  function handleRemove(index) {
    return () => {
      // const old = structuredClone(list);
      // old.splice(index, 1);
      // setList(old);
      console.log(listRefs);
    };
  }

  return (
    <div ref={parentRef} className="card green">
      <h1>🌈 Ref List</h1>
      {list.map((d, index) => {
        return (
          <div
            ref={(val) => {
              listRefs.current[index] = val;
            }}
            key={index}
          >
            <input type="text" />
            <button onClick={handleRemove(index)}>Remove {d.name}</button>
          </div>
        );
      })}

      <button>Send Data</button>
    </div>
  );
}

export default RefList;
