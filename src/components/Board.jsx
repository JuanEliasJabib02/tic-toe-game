/**
 * 
 * @returns 
 * In React, a component is a piece of reusable code that represents a part of a user interface. 
 * Components are used to render, manage, and update the UI elements in your application
 */
import { useState } from "react";

import { calculateWinner } from "../helper/calculateWinner";
import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {
  
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    console.log("im excecuted")
    
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
      
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }


  const data = "hi i am a prop"
  return (
    <> 
      {/* React components need to return a single JSX 
      element and not multiple adjacent JSX elements like 
      two buttons. To fix this you can use fragments (<> and </>) 
      to wrap multiple adjacent JSX elements like this: */}
      <div className="status">{status}</div>
      <div className="board-row">
              {/* We can send data from the parent to the
              child component by props(propertys) */}
        < Square prop={data} value={squares[1]} onSquareClick={() => handleClick(1)} />
        < Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        < Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        < Square  value={squares[4]} onSquareClick={() => handleClick(4)} />
        < Square  value={squares[5]} onSquareClick={() => handleClick(5)} />
        < Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        < Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        < Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        < Square value={squares[9]} onSquareClick={() => handleClick(9)}  />
      </div>
    </>
  )
}