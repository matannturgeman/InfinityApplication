import React from "react";
import Navbar from "./NavBar/NavBar";
import ScrollBar from "./ScrollBar/ScrollBar";
import pages from "../../data/views.json";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <ScrollBar>
      <Navbar pages={pages} />
      {children}
    </ScrollBar>
  );
};

export default MainLayout;
