import React, { Component } from "react";
import "./Task2.css";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { maxWidth } from "@mui/system";
export default function Task2() {
  const matches = useMediaQuery("minWidth:700px");
  return (
    <form className="form" align="center" style={{ marginTop: "20%" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Login Form
      </Typography>
      <Grid container spacing={2} sx={{ mt: 6 }}>
        <Grid item md={6} xs={12}>
          <Typography align="left">UserName/Email</Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography align="left">Password</Typography>
          <TextField variant="outlined" fullWidth />
          <Typography align="left" color={"secondary"}>
            Forgotten Password?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className="form__custom-button">Log in</Button>
          <Typography>Not a user? Sign Up</Typography>
        </Grid>
      </Grid>
    </form>
  );
}
