import React, { Component } from "react";
import "./Task3.css";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// import { maxWidth } from "@mui/system";
export default function Task3() {
  return (
    <form className="form2" align="center">
      <Grid container>
        <Typography variant="h4" align="left" sx={{ fontWeight: 500 }}>
          Registration Form
        </Typography>
        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item md={6} xs={12}>
            <Typography align="left">First Name</Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography align="left">Last Name</Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography align="left">Birthday</Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography align="left">Gender</Typography>
            <RadioGroup row name="radio-buttons-group">
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                sx={{ paddingInlineEnd: "2rem" }}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                sx={{ paddingInlineStart: "2rem" }}
              />
            </RadioGroup>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography align="left">Email</Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography align="left">Phone Number</Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item xs>
            <Typography align="left">Subject</Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button className="form__custom-button">Submit</Button>
            {/* <Typography>Not a user? Sign Up</Typography> */}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
