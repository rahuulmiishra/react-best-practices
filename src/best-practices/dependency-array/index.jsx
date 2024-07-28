// Anything you use in your effect callback that won't trigger a re-render when updated should not go into the dependency array.

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

var x = "";
const obj = {};
function DependencyArray() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const scoreRef = useRef(0);

  // useEffect(() => {}, [dispatch]); // 🫣

  if (!x) {
    x = dispatch;
  }

  console.log(dispatch === x);

  useEffect(() => {
    console.log("useEffect");
  }, [scoreRef.current]); // 😁

  function handleState() {
    setCount(count + 1);
  }

  function handleScore() {
    scoreRef.current = scoreRef.current + 1;
    console.log(scoreRef.current);
  }
  function logToServer() {
    console.log(" logToServerFunction called");
  }

  function logToSentry() {
    console.log(" logToServerFunction called", score);
  }

  return (
    <div>
      <button onClick={handleState}>Increase Count by State</button>
      <button onClick={handleScore}>Increase Count by Ref</button>
    </div>
  );
}

export default DependencyArray;
