export default function Square({ value }) {
                    /* To read a data that was send by props
                    we have to use the destructuring syntax
                     */
  return (
    <button className="square">{value}</button>
                        /* To use javascript values in the jsx
                        the javascript code has to be inside
                        the curly brackets
                         */
  )
                                  
}