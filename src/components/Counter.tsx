import useCounter from "../hooks/useCounter";
import styles from "./Counter.module.css";

// todo: a type for props..
type CounterProps = {
  initialValue: number;
  step?: number;
};

function Counter({ initialValue, step = 1 }: CounterProps) {
  const { value, increment, decrement } = useCounter(initialValue, step);

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

export default Counter;
