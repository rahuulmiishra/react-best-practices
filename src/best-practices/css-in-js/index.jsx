import { useState, memo } from "react";

const style = { background: "red" };

function CSSInJSX() {
  const [count, setCount] = useState(1);

  function handleCountClick() {
    setCount(count + 1);
  }
  return (
    <div className="card green" onClick={handleCountClick}>
      <h1>🧊 CSS In JS</h1>
      <button style={{ background: "red" }}>Count {count}</button>

      <MemoizedChild style={style} />
    </div>
  );
}

function Child({ style = {} }) {
  console.log("Re-rendering Child");

  return <div style={style}>I am child component</div>;
}

const MemoizedChild = memo(Child);

export default CSSInJSX;
