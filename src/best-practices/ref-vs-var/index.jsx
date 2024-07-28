import { useRef, useState } from "react";

let renderCount = 0;

function RefVsVar() {
  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);

  const handleClick = () => {
    renderCount += 1;
    refCount.current = refCount.current + 1;
    setStateCount(stateCount + 1);
  };

  console.log("Component re-rendered", renderCount, stateCount);
  console.log("ref", refCount.current);

  return (
    <div className="card green">
      <p>Render Count (external variable): {renderCount}</p>
      <p>State Count (useState): {stateCount}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default RefVsVar;
