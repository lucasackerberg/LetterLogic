import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const numRows = 5;
  const numCols = 6;

  // Function to generate a single tile
  const renderTile = (rowIndex, colIndex) => {
    return <div key={`tile-${rowIndex}-${colIndex}`} className="tile"></div>;
  };

  // Function to generate a row of tiles
  const renderRow = (rowIndex) => {
    const row = [];
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      row.push(renderTile(rowIndex, colIndex));
    }
    return row;
  };

  // Function to generate the entire board
  const renderBoard = () => {
    const board = [];
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      board.push(
        <div key={`row-${rowIndex}`} className="row">
          {renderRow(rowIndex)}
        </div>
      );
    }
    return board;
  };

  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="game-board">
        {renderBoard()}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
