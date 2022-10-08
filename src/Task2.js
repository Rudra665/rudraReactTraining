import {Grid} from '@mui/material';
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import './Task2.css';
import Container from '@mui/material/Container'; 
export default function Task2() {
    return (
        <Container maxWidth="md">
          
          {/* <form>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}> 
  
  </Grid>
  <Grid item xs={12} lg={6}>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <TextField type="password" class="form-control" id="exampleInputPassword1"></TextField>
  </div>
  </Grid>
  <Button type="submit" class="btn btn-primary">Submit</Button>
  </Grid>
</form> */}
<div className='container'>
<Grid container spacing={1}>
        <Grid sm={12} md={6}>
        <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <TextField fullWidth type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></TextField>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
        </Grid>
        <Grid sm={12} md={6}>
        <p>xs=6 md=8</p>
        </Grid>
        <Grid xs={6} md={4}>
        <p>xs=6 md=8</p>
        </Grid>
        <Grid xs={6} md={8}>
        <p>xs=6 md=8</p>
        </Grid>
      </Grid>
      </div>
      </Container>
    )
  }
  
  
  
  