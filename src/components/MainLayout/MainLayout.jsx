import React from "react";
import Scrollbar from "../ScrollBar/ScrollBar";

const MainLayout = (props) => {
  const { children } = props;
  return (
      <Scrollbar>
        {children}
      </Scrollbar>
  );
};

export default MainLayout;
