import { Link, Outlet } from "react-router-dom";
import "./app.css";
import AppBar from '@mui/material/AppBar';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';



export function App() {
  return (
    <div>
      <Nav  />
      <div >
        <Outlet />
      </div>

    </div>

  );
}

export function Nav() {
  return (
    <AppBar component={"nav"} >
      <Link to="/" element={<App />}></Link>
      <ul>
        <li><Link to="./Task1" element={<Task1 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task1</Link></li>
        <li> <Link to="/Task2" element={<Task2 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task2</Link></li>
        <li><Link to="/Task3" element={<Task3 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task3</Link></li>
        <li><Link to="/Task4" element={<Task4 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task4</Link></li>
        <li><Link to="/Task5" element={<Task5 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task5</Link></li>
      </ul>
    </AppBar >
  )
}
export default App;