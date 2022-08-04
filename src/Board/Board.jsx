import React, { useEffect, useState } from "react";
import Node from "./Node/Node";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default function Board() {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    const gr = getInitialGrid();
    setGrid(gr);
  },[]);

  return (
    <div>
      <Node></Node>
    </div>
  );
}

const getInitialGrid = () => {
  const grid = [];
  for (let i = 0; i < 20; i++) {
    const currentRow = [];
    for (let j = 0; j < 50; j++) {
      currentRow.push(createNode(i, j));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_ROW,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
