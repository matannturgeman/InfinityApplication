import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { DrawerListProps } from "../../../types/Drawer/DrawerList/drawerList.types";
import ScrollTo from "react-scroll-into-view";
import Button from "@mui/material/Button";
import { View } from "../../../types/Views/views.types";

function DrawerList({ toggleDrawer, views }: DrawerListProps) {
  return (
    <Box sx={styles.Box} role="presentation">
      {views.map(({ value, label }: View) => (
        <ScrollTo
          key={value}
          selector={`#page-${value}`}
          onClick={(event: MouseEvent) => toggleDrawer(event)}
        >
          <ListItem disablePadding sx={styles.ListItems}>
            <Button sx={styles.Button}>{label}</Button>
          </ListItem>
        </ScrollTo>
      ))}
    </Box>
  );
}

const styles = {
  Box: { width: 180, paddingRight: 4 },
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
