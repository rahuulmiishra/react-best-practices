import ErrorBoundary from "./ErrorBoundary";

import "./style.css";

function ShoppingWithError() {
  return (
    <div className="shopping">
      <nav className="card blue">
        <h1>❗️ Error Boundaries Issues</h1>
      </nav>
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
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );

  function Footer() {
    function handleClick() {
      const data = undefined;
      try {
        throw new Error("We crashed!!!!!");
      } catch {
        console.log("error occured");
      }
      data.show();
    }

    return (
      <footer>
        <button onClick={handleClick}>Register</button>
      </footer>
    );
  }
}

export default ShoppingWithError;
