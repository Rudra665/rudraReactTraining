import React from "react";
import { useState } from "react";
import "./Task2.css";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Password } from "@mui/icons-material";

export default function Task2() {
  const [name, setName] = useState("@. ");
  const [showPassword, setShowPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`hi ${name}`);
  };
  const [checked, setChecked] = useState("false");
  function isValid(name) {
    if (name === /\S+@\S+\.\S+/.test(name)) {
      setChecked(true);
    }
  }
  return (
    <form className="form" align="center" style={{ marginTop: "20%" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Login Form
      </Typography>
      <Grid container spacing={2} sx={{ mt: 6 }}>
        <Grid item md={6} xs={12}>
          <Typography align="left">Email</Typography>
          <TextField
            error={!isValid ? false : true}
            variant="outlined"
            fullWidth
            type={"email"}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
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
            error={showPassword.length < 10 ? false : true}
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
