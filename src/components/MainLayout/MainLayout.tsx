import React from "react";
import Navbar from "./NavBar/NavBar";
import pages from "../../data/pages.json";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar pages={pages} />
      {children}
    </>
  );
};

export default MainLayout;
