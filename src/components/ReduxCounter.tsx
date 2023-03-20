import { useAppDispatch, useAppSelector } from "../data/hooks";
import styles from "./Counter.module.css";
import * as counterSlice from "../data/slices/counter";

function ReduxCounter() {
  const value = useAppSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useAppDispatch();

  function increment() {
    const action = counterSlice.increment(5);
    dispatch(action);
  }

  function decrement() {
    const action = counterSlice.delayedDecrement(5, 500);
    dispatch(action);
  }

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
      <div className={styles.value}>{value}</div>
      <button className={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default ReduxCounter;
