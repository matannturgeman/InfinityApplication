import * as React from "react";
import Drawer from "@mui/material/Drawer";
import DrawerList from "./DrawerList";
import { CustomDrawerProps } from "../../../types/Drawer/drawer.types";

function CustomDrawer({ open, onClose, views }: CustomDrawerProps) {
  const toggleDrawer = (event: KeyboardEvent | MouseEvent): void => {
    if (
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <DrawerList toggleDrawer={toggleDrawer} views={views} />
    </Drawer>
  );
}

export default CustomDrawer;
