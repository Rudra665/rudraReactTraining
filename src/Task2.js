import * as React from "react";
import { TextField, Grid, Typography} from "@mui/material";

import Box from "@mui/material/Box";
// import "./Task2.css";



export default function Task2() {
  return (
  
    
    // <Grid component="form" container bgcolor={"aliceblue"} justifyContent="center" sm="auto" sx={{p:5, m: 6, mt:12 }}>
    // <Typography variant="h1" align="center">Login Form</Typography>
    // <Grid item sm={12} md={12} lg={6}>
    // <Box
     
    // >
    //   <TextField fullWidth label="Outlined secondary" color="secondary" focused />
      
    // </Box>
    // </Grid>
    // </Grid>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </Box>
    
    
    
    
     
  );
}
