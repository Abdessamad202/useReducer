import { connect } from "react-redux";
import PropTypes from "prop-types";

// Action Creators
const increment = () => ({ type: "increment" });
const decrement = () => ({ type: "decrement" });

const Counter = ({ counter, increment, decrement }) => {
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button type="button" onClick={decrement}>-</button>
      <button type="button" onClick={increment}>+</button>
    </>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const CounterStore = connect(
  (state) => ({
    counter: state.value,
  }),
  { increment, decrement }
)(Counter);

export { CounterStore };
