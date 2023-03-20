import { useState } from "react";

function useSimple() {
  const [value] = useState(0);

  return value;
}

export default useSimple;
