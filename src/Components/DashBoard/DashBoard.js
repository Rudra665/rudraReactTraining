// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MyDrawer from "./Drawer/MyDrawer";

import "./DashBoard.css";
import { Outlet } from "react-router-dom";
const DashBoard = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div style={{ backgroundColor: "aliceblue" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="relative">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Logged In</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <MyDrawer open={open} onClose={() => handleClose()} />
        <div class="text" align="center">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
