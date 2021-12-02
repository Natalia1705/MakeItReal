import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const resetCounterHandler = () => {
    dispatch({ type: "reset" });
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
