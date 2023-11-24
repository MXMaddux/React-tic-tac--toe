import React from "react";
import Board from "./Board";

const Game = () => {
  //   const calculateWinner = (squares) => {
  //     const lines = [
  //       [0, 1, 2],
  //       [3, 4, 5],
  //       [6, 7, 8],
  //       [0, 3, 6],
  //       [1, 4, 7],
  //       [2, 5, 8],
  //       [0, 4, 8],
  //       [2, 4, 6],
  //     ];

  //     for (let line of lines) {
  //       const [a, b, c] = line;

  //       if (
  //         squares[a] &&
  //         squares[a] === squares[b] &&
  //         squares[a] === squares[c]
  //       ) {
  //         return squares[a];
  //       }
  //     }
  //     return null;
  //   };

  return (
    <div className="game">
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

export default Game;
