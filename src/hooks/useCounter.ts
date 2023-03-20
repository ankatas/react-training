import { useCallback, useEffect, useState } from "react";

function useCounter(initialValue: number, step = 1) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const increment = useCallback(() => {
    setValue(value + step);
  }, [value, step]);

  const decrement = useCallback(() => {
    setValue(value - step);
  }, [value, step]);

  return {
    value,
    increment,
    decrement,
  };
}

export default useCounter;
