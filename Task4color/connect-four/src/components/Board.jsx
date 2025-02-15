import { useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (col) => {
    if (winner) return; // Stop if the game is over

    // Place the disc in the lowest available row
    const newBoard = board.map((row) => [...row]);
    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        if (checkWin(newBoard, row, col, currentPlayer)) {
          setWinner(currentPlayer);
        } else {
          setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        }
        return;
      }
    }
  };

  const checkWin = (board, row, col, player) => {
    const directions = [
      [[0, 1], [0, -1]], // Horizontal
      [[1, 0], [-1, 0]], // Vertical
      [[1, 1], [-1, -1]], // Diagonal /
      [[1, -1], [-1, 1]], // Diagonal \
    ];

    for (const direction of directions) {
      let count = 1;
      for (const [dx, dy] of direction) {
        let r = row + dx;
        let c = col + dy;

        while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === player) {
          count++;
          r += dx;
          c += dy;
        }
      }

      if (count >= 4) return true;
    }
    return false;
  };

  const resetGame = () => {
    setBoard(Array(6).fill(Array(7).fill(null)));
    setCurrentPlayer("red");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <h1 className="text-3xl font-bold">Connect Four</h1>
      {winner && <h2 className="text-2xl text-green-500">{winner.toUpperCase()} Wins!</h2>}
      <div className="grid grid-cols-7 gap-2 bg-blue-400 p-4 rounded-md">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 rounded-full ${
                cell ? (cell === "red" ? "bg-red-500" : "bg-yellow-500") : "bg-white"
              }`}
              onClick={() => handleCellClick(colIndex)}
            ></div>
          ))
        )}
      </div>
      <button
        onClick={resetGame}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Reset Game
      </button>
    </div>
  );
};

export default Board;
