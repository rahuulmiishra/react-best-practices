function CleanJSX({ pass, showDialog, data }) {
  return (
    <div className="card green">
      <h1>🧹 Clean JSX</h1>
      {pass ? "Pass" : "Fail"}
      <button onClick={() => {}}>Click Me</button>

      {showDialog ? <div>Dialog</div> : <div>Page</div>}

      <div>
        <span>{data?.name}</span>
        <span>{data?.age}</span>
      </div>
    </div>
  );
}

export default CleanJSX;
