import { useReducer } from "react";
import { initialCount, counterReducer } from "./counterReducer";
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCount);

  return (
    <>
      <h3>The Count is {state}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </>
  );
};
export { Counter };
