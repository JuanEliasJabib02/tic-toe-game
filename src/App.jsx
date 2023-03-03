/**
 * 
 * @returns 
 * In React, a component is a piece of reusable code that represents a part of a user interface. 
 * Components are used to render, manage, and update the UI elements in your application
 */
import { useState } from "react";
import Square from "./components/Square"
import "./styles.css"

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  
  const onSquareClick = (i) => {

    const nextSquares = squares.slice();
    nextSquares[i] = "x"
    setSquares(nextSquares);
}


  const data = "hi i am a prop"
  return (
    <> 
      {/* React components need to return a single JSX 
      element and not multiple adjacent JSX elements like 
      two buttons. To fix this you can use fragments (<> and </>) 
      to wrap multiple adjacent JSX elements like this: */}
      <div className="board-row">
              {/* We can send data from the parent to the
              child component by props(propertys) */}
        < Square prop={data} value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        < Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        < Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
      </div>
      <div className="board-row">
        < Square  value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        < Square  value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        < Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
      </div>
      <div className="board-row">
        < Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        < Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
        < Square value={squares[9]} onSquareClick={() => onSquareClick(9)}  />
      </div>
    </>
  )
}
