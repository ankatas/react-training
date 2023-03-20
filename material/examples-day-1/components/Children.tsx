import React, { useState } from "react";
import "./Children.css";

type ChildrenProps = {
  children?: React.ReactNode;
};

function Children({ children }: ChildrenProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="Children">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <div>{children}</div>
    </div>
  );
}

export default Children;
