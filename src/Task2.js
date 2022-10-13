import React from "react";
import { useState } from "react";
import "./Task2.css";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Password } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import DashBhoard from "./DashBhoard";

export default function Task2() {
  const [error, setError] = React.useState(false);
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
      // <Link to="./DashBhoard" element={<DashBhoard />}/>;
      navi("/DashBhoard");
    } else {
      alert`invalid credentials`;
    }
  };

  const isOk = () => {
    // if (Name === null && showPassword === null) {
    //   alert`Please fill the login form then submit`;
    //   setError(true);
    // } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Name)) {
    //   alert(`Logged in  ${Name}`);
    //   setError(false);
    // } else if (Name === /^[a-z]+$/) {
    //   setError(false);
    // } else {
    //   setError(true);
    //   alert`email is invalid`;
    // }
  };
  // const isok2 = (Password) => {
  //   if (Password > 10) {
  //     return true;
  //   } else if (Password < 5 && Password !== null) {
  //     alert`password must contain atleast 5 digits`;
  //     return true;
  //   }

  // };
  return (
    <form className="form" align="center" style={{ marginTop: "20%" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Login Form
      </Typography>
      <Grid container spacing={2} sx={{ mt: 6 }}>
        <Grid item md={6} xs={12}>
          <Typography align="left">Email</Typography>
          <TextField
            error={error && isOk}
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
