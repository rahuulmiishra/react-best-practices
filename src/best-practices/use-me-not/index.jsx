import { useEffect, useState } from "react";

function UseMeNot() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(["js", "react", "jq", "ajax"]);
  const [filteredData, setFilteredData] = useState([]);

  function handleSubmit() {
    console.log({ name });
  }

  function handleNameChange(e) {
    setName(e.target.value);
    if (e.target.value.length > 3) {
      setMessage("Wait!! now u can submit the form");
    }
    setFilteredData(data.filter((d) => d.includes(value)));
  }

  return (
    <div className="card green">
      <h1>Use Me Not 🚫</h1>
      <input onChange={handleNameChange} type="text" placeholder="Name" />
      <input onChange={handleFilter} type="text" placeholder="Language" />
      {filteredData.map((l) => (
        <h4 key={l}>{l}</h4>
      ))}
      {message}
      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
}

export default UseMeNot;
