import React from "react";
import { useState } from "react";
import "./Task2.css";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";

export default function Task2() {
  var navi = useNavigate();
  const [showPassword, setShowPassword] = useState("");
  const [mail, setMail] = useState("");
  const credentials = {
    name: "adevin237@gmail.com",
    cred: "d@rk57ON",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (mail === credentials.name && showPassword === credentials.cred) {
      alert`Logged In`;

      navi("/DashBoard");
    } else {
      alert`invalid credentials`;
    }
  };
  return (
    <form className="form" align="center" style={{ marginTop: "20%" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Login Form
      </Typography>
      <Grid container spacing={2} sx={{ mt: 6 }}>
        <Grid item md={6} xs={12}>
          <Typography align="left">Email</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type={"text"}
            value={mail}
            required
            onChange={(e) => setMail(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography align="left">Password</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={showPassword}
            type={"password"}
            required
            onChange={(e) => setShowPassword(e.target.value)}
            error={
              showPassword.length < 10 || showPassword === null ? false : true
            }
          />
          <Typography align="left" color={"secondary"}>
            Forgotten Password?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className="form__custom-button"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Typography>Not a user? Sign Up</Typography>
        </Grid>
      </Grid>
    </form>
  );
}
