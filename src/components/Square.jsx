import { useState } from "react"

export default function Square({ prop, value, onSquareClick  }) {
                    /* To read a data that was send by props
                    we have to use the destructuring syntax
                     */
  
  console.log(value)
  
  /* What is a state?

  The components some time need to change what react
  is showing in the ui as a result of a interantion

  So the states in less words
  are data that can change in the time like
  the memory of a component
  */
  
  /* We can do a component interactive using events handlers */


  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
                        /* To use javascript values in the jsx
                        the javascript code has to be inside
                        the curly brackets
                         */
  )
                                  
}