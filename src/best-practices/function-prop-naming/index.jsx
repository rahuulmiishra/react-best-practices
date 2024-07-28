/* eslint-disable no-undef */

/*

function naming convention

*/

function FunctionPropNaming() {
  function handleClick() {
    console.log("Here is your coffee");
  }

  return (
    <div>
      <Child buyNow={handleClick} />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Child({ buyNow } = {}) {
  return (
    <div>
      <h1>I am child Component</h1>
      <button>Click Me.</button>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  );
}

export default FunctionPropNaming;
