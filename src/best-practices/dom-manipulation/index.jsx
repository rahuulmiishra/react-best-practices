function DomManipulation() {
  function handleClick() {
    console.log("Executing Logic");
    const elem = document.getElementById("content-div");
    elem.style.background = "red";
  }

  console.log("Frontend Master 🥷🏻");

  return (
    <div className="card green" id="content-div">
      <h1>🏞️ DOM Manipulation</h1>
      <button onClick={handleClick}>Click Me to change color 🎨</button>
    </div>
  );
}

export default DomManipulation;
