import { useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

import "./style.css";

function ShoppingWithError() {
  return (
    <div className="shopping">
      <ErrorBoundary>
        <nav className="card">
          <h1>❌ Error Boundaries</h1>
        </nav>
      </ErrorBoundary>

      <div className="content">
        <section className="card green">
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
    useEffect(() => {
      const obj = undefined;
      obj();
    }, []);

    function handleClick() {
      // const obj = undefined;
      // obj();
    }

    return (
      <footer>
        <button onClick={handleClick}>Register</button>
      </footer>
    );
  }
}

export default ShoppingWithError;
