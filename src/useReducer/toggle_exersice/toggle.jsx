import {useReducer} from "react";
import { INITIAL_TOGGLE_STATE, toggleReducer } from "./toggleReducer";
const Toggle = () => {
  const [state, dispatch] = useReducer(toggleReducer, INITIAL_TOGGLE_STATE);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch();
        }}
        style={{background:state ? "green" : "red"}}
      >
        {state ? "ON" : "OFF"}
      </button>
    </>
  );
};
export { Toggle };