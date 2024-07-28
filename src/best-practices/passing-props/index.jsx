function Parent(props) {
  return (
    <div className="card green">
      <h1>🛂 Passing Props</h1>
      <Child
        name={props.name}
        age={props.age}
        dept={props.dept}
        bank={props.bank}
      />

      <Child {...props} />
    </div>
  );
}

function Child(props) {
  return <h1>Hey there</h1>;
}

export default Parent;
