import { TabPanelProps } from "../../types/Views/gallery.types";
import Box from "@mui/material/Box";
import React from "react";

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const {
    children,
    selected,
    index,
    boxStyles = { p: 3 },
    name = "panel",
    ...restProps
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={!selected}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...restProps}
    >
      {selected && <Box sx={boxStyles}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
