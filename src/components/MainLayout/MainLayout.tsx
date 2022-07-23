import React from "react";
import Scrollbar from "./ScrollBar/ScrollBar";
import Navbar from "./NavBar/NavBar";
import pages from "../../data/pages.json";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <Scrollbar>
      <Navbar pages={pages} />
      {children}
    </Scrollbar>
  );
};

export default MainLayout;
