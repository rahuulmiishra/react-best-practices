import Text from "../Text";

const Size = {
  Medium: 1,
  Small: 2,
  Large: 3,
};

function Button({ label, onClick, size = "medium" }) {
  return (
    <button onClick={onClick}>
      <Text text={label} />
    </button>
  );
}

Button.Size = Size;

export default Button;
