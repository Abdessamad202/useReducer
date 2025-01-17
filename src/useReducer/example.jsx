import { useReducer } from "react"
import { initialState, reducer } from "./toggle_exersice/reducer"

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count: {state}</div>
        <button onClick={() => dispatch({type: 'increment',payload :{number: 2}})}>+</button>
        <button onClick={() => dispatch({type: 'decrement',payload :{number: 3}})}>-</button>
      </div>
  )
}

export default Example