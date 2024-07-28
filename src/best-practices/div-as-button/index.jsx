function DivAsButton() {
  function handleStart() {
    console.log("start");
  }

  function handleStop() {
    console.log("stop");
  }

  return (
    <div onClick={() => {}} className="card green div-btn">
      <h1>🔆 div as button</h1>
      <input type="text" placeholder="enter your name" />
      <button onClick={handleStart}>Start</button>
      <div role="button" onClick={handleStop}>
        Stop
      </div>
    </div>
  );
}

export default DivAsButton;
