import { useEffect, useState } from "react";

function useRandom(intervalMs = 1000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setValue(Math.random());
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs]);

  return value;
}

export default useRandom;
