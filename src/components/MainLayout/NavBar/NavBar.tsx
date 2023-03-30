import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { NavBarProps } from "../../../types/NavBar/navbar.types";
import { View } from "../../../types/Views/views.types";
import MenuDrawer from "../Drawer/Drawer";

const RenderMenuController = ({ views }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);

  const onClose = () => {
    setOpen(false);
  }

  return (
    <Box sx={styles.MenuContollerBox}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <MenuDrawer open={open} onClose={onClose} views={views} />
    </Box>
  );
};

const RenderViewsButtons = ({ views }): JSX.Element => (
  <Box sx={styles.ViewsButtonsBox}>
    {views.map(
      ({ label, value }: View): JSX.Element => (
        <Link key={value} to={`/${value}`} className="router-link">
          <Button sx={styles.ViewButton}>{label}</Button>
        </Link>
      )
    )}
  </Box>
);

const RenderLogo = (): JSX.Element => (
  <Typography variant="h6" noWrap component="a" href="/" sx={styles.Logo}>
    Infinity
  </Typography>
);

const NavBar = ({ views }: NavBarProps) => {
  return (
    <AppBar position="fixed" sx={styles.AppBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RenderLogo />
          <RenderMenuController views={views} />
          <RenderViewsButtons views={views} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  AppBar: {
    backgroundColor: "transparent",
  },
  MenuContollerBox: { flexGrow: 1, display: { xs: "flex", md: "none" } },
  ViewsButtonsBox: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  ViewButton: { my: 2, color: "white", display: "block" },
  Logo: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
};

export default NavBar;
