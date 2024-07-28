function Text({ text, size = 1 }) {
  return <span style={{ fontSize: `${size}rem` }}>{text}</span>;
}

export default Text;
