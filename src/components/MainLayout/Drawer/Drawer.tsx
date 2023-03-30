import React, { useMemo } from "react";
import Drawer from 'react-modern-drawer'
import DrawerList from "./DrawerList";
import { CustomDrawerProps } from "../../../types/Drawer/drawer.types";
import 'react-modern-drawer/dist/index.css'


function CustomDrawer({ open, onClose, views }: CustomDrawerProps) {
  
  return (
    <Drawer
      direction="left"
      open={open}
      onClose={onClose}
      size={200}
    >
      <DrawerList onClose={onClose} views={views} />
    </Drawer>
  );
}

export default CustomDrawer;
