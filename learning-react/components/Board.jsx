/* eslint-disable no-unused-vars */
import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleOnClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const copyArray = [...squares];
    if (xIsNext) {
      copyArray[i] = "X";
    } else {
      copyArray[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(copyArray);
  };

  return (
    <>
      <h1>{status}</h1>
      <div className="board-row">
        <Square value={squares[0]} onClickSquare={() => handleOnClick(0)} />
        <Square value={squares[1]} onClickSquare={() => handleOnClick(1)} />
        <Square value={squares[2]} onClickSquare={() => handleOnClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickSquare={() => handleOnClick(3)} />
        <Square value={squares[4]} onClickSquare={() => handleOnClick(4)} />
        <Square value={squares[5]} onClickSquare={() => handleOnClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickSquare={() => handleOnClick(6)} />
        <Square value={squares[7]} onClickSquare={() => handleOnClick(7)} />
        <Square value={squares[8]} onClickSquare={() => handleOnClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
