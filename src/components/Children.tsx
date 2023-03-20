import React, { useState } from "react";
import "./Children.css";

type ChildrenProps = {
  children?: React.ReactNode;
};

function Children({ children }: ChildrenProps) {
  const [isVisible, setIsVisible] = useState(true);

  // let content = <></>;
  // if (isVisible) {
  //   content = <>{children}</>;
  // }

  return (
    <div className="Children">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible ? <div>{children}</div> : null}
      {/* {content} */}
    </div>
  );
}

export default Children;
