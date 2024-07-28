import { lazy, Suspense, useState } from "react";
// import Product from "./Product";
// import { processData } from "./utils";

const Product = lazy(() => import("./Product"));

function LazyLoading() {
  const [count, setCount] = useState(1);

  function handleCount() {
    setCount(count + 1);
  }

  if (count > 10) {
    import("./utils").then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="card green">
      <h1>🛌 Lazy Loading</h1>
      <button onClick={handleCount}>Count {count}</button> <br />
      {count > 5 && (
        <Suspense fallback="loadding product">
          <Product />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoading;
