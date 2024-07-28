/*

 things to discuss:
  1. StackTrace
  2. Memoization
  3. Data-Set
  4. Currying

*/

function ArrowFunctions() {
  const data = [
    { id: 2, name: "JS" },
    { id: "21", name: "React" },
    { id: 90, name: "Vue" },
  ];

  function handleClick() {
    console.log("Here is your coffee");
  }

  function handleButtonClick(d) {
    return function handleButtonClickInner() {
      const x = undefined;
      x.s;
      handleClick(d, index);
    };
  }

  return (
    <div className="card green">
      <h1>💘 Arrow Functions - Not your friend 👯‍♀️</h1>
      {data.map((d, index) => {
        return (
          <button key={d.id} onClick={handleButtonClick()}>
            {d.name}
          </button>
        );
      })}
    </div>
  );
}

export default ArrowFunctions;
