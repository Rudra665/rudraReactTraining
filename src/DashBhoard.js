// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { fontSize, height } from "@mui/system";
const DashBhoard = () => {
  return (
    <>
      <div style={{ backgroundColor: "aliceblue" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
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
        <div className="text" align="center" style={{}}>
          <h1>Hello Sir!</h1>
        </div>
      </div>
    </>
  );
};

export default DashBhoard;
