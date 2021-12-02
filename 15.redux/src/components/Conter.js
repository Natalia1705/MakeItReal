import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  selectCounterValue,
} from "../features/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounterValue);

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const resetCounterHandler = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={resetCounterHandler}>Reset</button>
    </div>
  );
};

export default Counter;
