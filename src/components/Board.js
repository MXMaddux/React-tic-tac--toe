import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        margin: 10,
        padding: 20,
      }}
    >
      Board
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
