function Fragments() {
  return (
    <div>
      <h1>🧩 Fragments</h1>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div>
      <Title />
      <Summary />
    </div>
  );
}

function Title() {
  return <span>Title</span>;
}

function Summary() {
  return (
    <>
      <span>Age</span>
      <span>Investment</span>
    </>
  );
}

export default Fragments;
