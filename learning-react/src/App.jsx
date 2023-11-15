import Board from "../components/Board";
import "./styles.css";
export function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*Todo*/}</ol>
      </div>
    </div>
  );
}
