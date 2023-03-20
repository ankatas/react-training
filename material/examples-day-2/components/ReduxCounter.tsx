import styles from "./Counter.module.css";

function ReduxCounter() {
  // todo: call useAppSelector and select the counter's value from the store
  const value = 0; // replace the 0

  return (
    <div className={styles.root}>
      <button className={styles.button} /*onClick={decrement}*/>-</button>
      <div className={styles.value}>{value}</div>
      <button className={styles.button} /*onClick={increment}*/>+</button>
    </div>
  );
}

export default ReduxCounter;
