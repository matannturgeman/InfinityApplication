import React from "react";
import Navbar from "./NavBar/NavBar";
import ScrollBar from "./ScrollBar/ScrollBar";
import views from "../../data/views.json";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <ScrollBar>
      <Navbar views={views} />
      {children}
    </ScrollBar>
  );
};

export default MainLayout;
