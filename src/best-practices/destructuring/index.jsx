function Destructuring(props) {
  const {
    label = "",
    desc = "",
    number = 1,
    getData = () => {},
    setValue,
  } = props || {};

  const Data = [{ id: 1, name: "XYZ", age: 23, dept: "JS" }];

  return (
    <>
      <h1>🗽 Destructuring Usage</h1>
      <h4>{label}</h4>
      <h4>{desc}</h4>

      {Data.map((d) => {
        const { id, dept, name } = d;
        return (
          <div key={id}>
            {dept}
            {name}
          </div>
        );
        ``;
      })}
    </>
  );
}

export default Destructuring;
