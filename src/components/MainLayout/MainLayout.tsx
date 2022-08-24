import React from "react";
import Navbar from "./NavBar/NavBar";
import ScrollBar from "./ScrollBar/ScrollBar";
import views from "../../data/views.json";

const MainLayout = (props) => {
  const { children: viewsChildren } = props;

  return (
    <ScrollBar>
      <Navbar views={views} />
      {viewsChildren}
     </ScrollBar>
  );
};

export default MainLayout;
