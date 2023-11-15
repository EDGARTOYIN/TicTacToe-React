// eslint-disable-next-line react/prop-types
export default function Square({ value, onClickSquare }) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}
