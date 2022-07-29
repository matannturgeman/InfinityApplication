import * as React from "react";
import "./EmptyBox.scss";

const Box = ({ children, ...restProps }) => {
  return (
    <div className="empty-box" {...restProps}>
      {children}
    </div>
  );
};

export default Box;
