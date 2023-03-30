import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { DrawerListProps } from "../../../types/Drawer/DrawerList/drawerList.types";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { View } from "../../../types/Views/views.types";

function DrawerList({ onClose, views }: DrawerListProps) {
  return (
    <Box sx={styles.DrawerBox} role="presentation">
      {views.map(({ value, label }: View) => (
        <Link
          key={value}
          to={`/${value}`}
          onClick={onClose}
          className="router-link"
        >
          <ListItem disablePadding sx={styles.ListItems} onClick={onClose}>
            <Button onClick={onClose} sx={styles.Button}>
              {label}
            </Button>
          </ListItem>
        </Link>
      ))}
    </Box>
  );
}

const styles = {
  DrawerBox: { width: 180, paddingRight: 4 },
  Button: {
    my: 2,
    width: "100%",
    color: "black",
    display: "block",
    textAlign: "right",
  },
  ListItems: { width: "100%" },
};

export default DrawerList;
