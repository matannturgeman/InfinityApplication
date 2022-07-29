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
import TemporaryDrawer from "../Drawer/Drawer";

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

  const renderNavMenu = (): JSX.Element => (
    <Box sx={styles.BoxButtons}>
      {views.map(
        ({ label, value }: View): JSX.Element => (
          <ScrollTo key={value} selector={`#page-${value}`}>
            <Button onClick={handleCloseNavMenu} sx={styles.Button}>
              {label}
            </Button>
          </ScrollTo>
        )
      )}
    </Box>
  );

  return (
    <AppBar position="fixed" sx={styles.AppBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {renderLogo()}

          <Box sx={styles.Box}>
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

            <TemporaryDrawer open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} views={views} />
          </Box>

          {renderNavMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  AppBar: { backgroundColor: "transparent" },
  Box: { flexGrow: 1, display: { xs: "flex", md: "none" } },
  Button: { my: 2, color: "white", display: "block" },
  BoxButtons: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  Menu: {
    display: { xs: "block", md: "none" },
  },
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
