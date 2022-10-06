import { Link, Outlet } from "react-router-dom";
import "./style.css";
import { TextField } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import SampleTable from './sampleTable.json';
import OutlinedInput from '@mui/material/OutlinedInput';
import { fontSize } from "@mui/system";
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";


export function App() {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>

    </div>

  );
}

export function Nav() {
  return (
    <AppBar className="AppBar">
      <Link to="/" element={<App />}></Link>
      <ul>
        <li><Link to="/Task1" element={<Task1 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task1</Link></li>
        <li> <Link to="/Task2" element={<Task2 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task2</Link></li>
        <li><Link to="/Task3" element={<Task3 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task3</Link></li>
        <li><Link to="/Task4" element={<Task4 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task4</Link></li>
        <li><Link to="/Task5" element={<Task5 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task5</Link></li>
      </ul>
    </AppBar >
  )
}
export function Task1() {

  return (
    <><p> This is Task1</p>
      <div><TableContainer>
        <TableHead><TableRow>
          <TableCell>User Id</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>User Email</TableCell>
          <TableCell>User Gender</TableCell>
          <TableCell>User Mobile</TableCell>
        </TableRow></TableHead>
        <TableBody>
          {SampleTable.map((item, id) => (
            <TableRow>
              <TableCell >{item.id}</TableCell>
              <TableCell >{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>,
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>,
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>,
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer></div>
    </>
  )
}

export function Task5() {
  return (

    <><p> this is Task5</p>

    </>

  )
}
export function Task4() {
  return (

    <p> this is Task4</p>

  )
}
export function Task3() {
  return (

    <p> this is Task3</p>

  )
}

export function Task2() {
  return (

    <>
      <div className="background">
        <div className="form">
          <h1>Login Form</h1>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6} >
              <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: 'auto', }}>
                  <Typography>Email or Phone</Typography>
                  <OutlinedInput placeholder="User Name" />
                </FormControl>
              </Box></Grid>
            <Grid item sm={12} md={6}>
              <Typography>Email or Phone</Typography>
              <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '40ch', ml: 8, }}>
                  <OutlinedInput placeholder="Password" />
                </FormControl>
              </Box></Grid>
            <Typography>Forgot Password?</Typography>
            <Button className="btn" variant="contained" sx={{ ml: 8, mt: 5, px: 17 }} >
              Sign In
            </Button>
            <Typography component={"span"} sx={{ color: "black" }}>Not a member?
              <Typography>SignUp now</Typography>
            </Typography>
          </Grid>

        </div>
      </div>
    </>
  );
}


export default App;

