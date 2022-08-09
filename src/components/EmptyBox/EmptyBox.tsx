import * as React from "react";
import "./EmptyBox.scss";

const Box = ({ children, ...restProps }) => {
  return (
    <section className="empty-box" {...restProps}>
      {children}
    </section>
  );
};

export default Box;
