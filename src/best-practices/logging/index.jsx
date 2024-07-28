import { useEffect } from "react";

function Logging() {
  useEffect(() => {
    console.log("API fetch started");
    setTimeout(() => {
      console.log("API Data came");
    }, 2000);
  }, []);

  function handleClick() {
    console.log("Executing Logic");
  }

  if (process.env === "prod") {
    window.console = () => {};
  }

  //

  // 1. sentry
  // 2. datadog
  // 3. bugsnad

  // 4. logrocket

  return (
    <div className="card green">
      <h1>🪵 Logging</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Logging;
