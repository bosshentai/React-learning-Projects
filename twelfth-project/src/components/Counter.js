import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const show = useSelector((state) => {
    return state.counter.showCounter;
  });

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" }); // redux
    dispatch(counterActions.increment()); // redux-toolkit
  };

  const increaseHandler = () => {
    // dispatch({ type: "INCREASE", amount: 5 }); // redux
    dispatch(counterActions.increase(5)); // redux-toolkit
  };

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" }); redux
    dispatch(counterActions.decrement()); // redux-toolkit
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggle()); // redux-toolkit
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
