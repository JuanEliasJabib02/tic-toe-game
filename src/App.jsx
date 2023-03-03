/**
 * 
 * @returns 
 * In React, a component is a piece of reusable code that represents a part of a user interface. 
 * Components are used to render, manage, and update the UI elements in your application
 */
import Square from "./components/Square"
import "./styles.css"

export default function Board() {
  return (
    <> 
      {/* React components need to return a single JSX 
      element and not multiple adjacent JSX elements like 
      two buttons. To fix this you can use fragments (<> and </>) 
      to wrap multiple adjacent JSX elements like this: */}
      <div className="board-row">
        < Square />
        < Square />
        < Square />
      </div>
      <div className="board-row">
        < Square />
        < Square />
        < Square />
      </div>
      <div className="board-row">
        < Square />
        < Square />
        < Square />
      </div>
    </>
  )
}
