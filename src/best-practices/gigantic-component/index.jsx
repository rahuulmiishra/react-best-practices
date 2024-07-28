import "./style.css";

function GiganticComponent() {
  return (
    <div className="shopping">
      <nav>
        <h1>Navigation</h1>
      </nav>
      {Content()}
      <footer>
        <h1>I am footer</h1>
      </footer>
    </div>
  );

  function Content() {
    return (
      <div className="content">
        <section>
          <div className="left">
            <button>Left Button</button>
          </div>
          <div className="right">
            <button>Right Button</button>
          </div>
        </section>
      </div>
    );
  }
}

export default GiganticComponent;
