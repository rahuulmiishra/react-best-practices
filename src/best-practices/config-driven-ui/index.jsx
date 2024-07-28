/*

  Two things to discuss:
  1. Config
  2. Multiple function handling

*/

const Buttons = [
  {
    id: "1",
    label: "Buy me Coffee ☕️",
  },
  {
    id: "11",
    label: "Buy me IceCream ☕️",
  },
  {
    id: "12",
    label: "Buy me Mac ☕️",
  },
  {
    id: "123",
    label: "Buy me Widnows ☕️",
  },
  {
    id: "1234",
    label: "Buy me a new watch ☕️",
  },
];

function ConfigDrivenUI() {
  const FunctionMapping = {
    1: handleCoffee,
    11: handleIceCream,
    12: handleMac,
    123: handleWidnows,
    1234: handleWatch,
  };

  function handleWatch() {
    console.log("Here is your handleWatch");
  }

  function handleCoffee() {
    console.log("Here is your coffee");
  }

  function handleIceCream() {
    console.log("Here is your IceCream");
  }

  function handleMac() {
    console.log("Here is your Mac");
  }

  function handleWidnows() {
    console.log("Here is your handleWidnows");
  }

  function handleButtonClick(e) {
    const btnId = e.target.getAttribute("data-btn-id");

    FunctionMapping[btnId]?.();
  }

  return (
    <div className="card blue">
      <h1>🧑‍💻 Config driven UI</h1>
      {Buttons.map((button) => {
        return (
          <button
            data-btn-id={button.id}
            onClick={handleButtonClick}
            key={button.id}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
}

export default ConfigDrivenUI;
