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
              {/* We can send data from the parent to the
              child component by props(propertys) */}
        < Square value="1"/>
        < Square value="2"/>
        < Square value="3" />
      </div>
      <div className="board-row">
        < Square value="4"/>
        < Square value="5" />
        < Square  value="6"/>
      </div>
      <div className="board-row">
        < Square value="7" />
        < Square value="8"/>
        < Square value="9"/>
      </div>
    </>
  )
}
