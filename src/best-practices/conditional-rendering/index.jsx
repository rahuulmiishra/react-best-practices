function ConditionalRendering({ marks = 0 }) {
  return (
    <>
      <h1>🍧 Conditional Rendering</h1>
      <div>{marks ? "Hey You Made It" : "Better Luck Next Time"}</div>

      {!!marks && "Hey You Made It"}

      {!marks && "Better Luck Next Time"}

      <Conditional
        condition={!!marks}
        ifComponent={"Hey You Made It"}
        elseComponent="Better Luck Next Time"
      />

      {!!marks && <PassPrize />}
    </>
  );
}

function PassPrize() {
  return <div>iPhone</div>;
}

export default ConditionalRendering;

function Child() {}

function Parent() {}

function Conditional({ condition, ifComponent, c }) {
  return condition ? { ifComponent } : { ifComponent };
}
