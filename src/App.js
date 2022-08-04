import "./App.css";
import Board from "./Board/Board";

function App() {
  return (
    <div className="App">
      <div className="bubbles">
        <h1>DIJKSTRA ANIMATION</h1>
      </div>
      <div className="board">
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
