import React from "react";
import ScrollBar from "./ScrollBar/ScrollBar";

const MainLayout = (props) => {
  const { children: viewsChildren } = props;

  return <ScrollBar>{viewsChildren}</ScrollBar>;
};

export default MainLayout;
