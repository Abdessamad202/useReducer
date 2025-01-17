// import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { Toggle } from "./useReducer/toggle_exersice/toggle";
import { Counter } from "./useReducer/counter_exersice/counter";
import { Card } from './useReducer/shoping_exersices/Card'
createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <>
    <Toggle />
    <hr />
    <Counter />
    <hr />
    <Card />
  </>
  // </Provider>
);
