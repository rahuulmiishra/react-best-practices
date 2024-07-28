import Button from "./Button";
import Text from "./Text";

/*
  1. Noodles
  2. Variant Support Example
*/

function ReusableComponents() {
  return (
    <div>
      <h4>Reusable Components</h4>

      <Button size={Button.Size.Medium} label={"Click Me"} />
      <Text text={"Sample Text"} />
    </div>
  );
}

export default ReusableComponents;
