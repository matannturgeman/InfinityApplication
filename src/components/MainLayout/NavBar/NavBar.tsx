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
import ScrollTo from "react-scroll-into-view";
import { NavBarProps } from "../../../types/NavBar/navbar.types";
import { View } from "../../../types/Views/views.types";
import MenuDrawer from "../Drawer/Drawer";

const NavBar = ({ views }: NavBarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const renderLogo = (): JSX.Element => (
    <Typography variant="h6" noWrap component="a" href="/" sx={styles.Logo}>
      Infinity
    </Typography>
  );

  const renderViewsButtons = (): JSX.Element => (
    <Box sx={styles.ViewsButtonsBox}>
      {views.map(({ label, value }: View): JSX.Element => (
        <ScrollTo key={value} selector={`#page-${value}`}>
          <Button onClick={handleCloseNavMenu} sx={styles.ViewButton}>
            {label}
          </Button>
        </ScrollTo>
      ))}
    </Box>
  );

  const renderMenuController = (): JSX.Element => (
    <Box sx={styles.MenuContollerBox}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <MenuDrawer open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} views={views} />
    </Box>
  )

  return (
    <AppBar position="fixed" sx={styles.AppBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {renderLogo()}
          {renderMenuController()}
          {renderViewsButtons()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  AppBar: { backgroundColor: "transparent" },
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
