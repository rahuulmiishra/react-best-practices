import { useEffect, useState } from "react";

/* eslint-disable no-undef */
function CleanupUsage() {
  const [start, setStart] = useState(false);

  function handleStart() {
    setStart(true);
  }

  function handleStop() {
    setStart(false);
  }

  return (
    <div className="card green">
      <h1>🧼 Cleanup function Usage</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>

      {start && <BrewCoffee stopBrewing={handleStop} />}
    </div>
  );
}

function BrewCoffee({ stopBrewing }) {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    let id = setTimeout(() => {
      alert("Here is your coffee ☕");
    }, 6000);

    return () => {
      // cleanup function
      document.removeEventListener("click", handleClick);
      clearTimeout(id);
    };
  }, []);

  function handleClick() {
    console.log("You requested to stop by click everywhere.");
    // stopBrewing(false);
  }

  return <h1>Coffee Brewing Started</h1>;
}

// eslint-disable-next-line react/prop-types

export default CleanupUsage;
