import { incrementByAmount, decrementByAmount } from "./counterSlice";
import { fetchCount } from "./counterAPI";

export const addAsyncAmount = (value) => {
  return async (dispatch) => {
    const amount = await fetchCount(value);
    dispatch(incrementByAmount(Number(amount.data)));
  };
};

export const restAsyncAmount = (value) => {
  return async (dispatch) => {
    const amount = await fetchCount(value);
    dispatch(decrementByAmount(Number(amount.data)));
  };
};
