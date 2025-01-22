import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Card } from "./useReducer/shoping_exersices/Card";
import { CounterReducer } from "./redux/Reducers/counterReducer";
const store = createStore(CounterReducer);
store.subscribe(() => {
  alert("the state has been changed !!!!! "+ store.getState().value);
});
for (let index = 0; index < 10; index++) {
  store.dispatch({ type: "increment"});
}
// createRoot(document.getElementById('root')).render(
//   <Card />
// )
