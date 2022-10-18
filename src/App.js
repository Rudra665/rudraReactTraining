import { Link, Outlet } from "react-router-dom";
import "./app.css";
import AppBar from "@mui/material/AppBar";
import Task1 from "./Components/Task1/Task1";
import Task2 from "./Components/Task2/Task2";
import Task3 from "./Components/Task3/Task3";
import Task4 from "./Components/Task4/Task4";
import Task5 from "./Components/Task5/Task5";

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
    <>
      <AppBar component={"nav"} sx={{ mb: 12 }}>
        <Link to="/" element={<App />}></Link>
        <ul>
          <li>
            <Link
              to="/Task1"
              element={<Task1 />}
              style={{ color: "aliceblue", fontSize: "24px" }}
            >
              Task1
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/Task2"
              element={<Task2 />}
              style={{ color: "aliceblue", fontSize: "24px" }}
            >
              Task2
            </Link>
          </li>
          <li>
            <Link
              to="/Task3"
              element={<Task3 />}
              style={{ color: "aliceblue", fontSize: "24px" }}
            >
              Task3
            </Link>
          </li>
          <li>
            <Link
              to="/Task4"
              element={<Task4 />}
              style={{ color: "aliceblue", fontSize: "24px" }}
            >
              Task4
            </Link>
          </li>
          <li>
            <Link
              to="/Task5"
              element={<Task5 />}
              style={{ color: "aliceblue", fontSize: "24px" }}
            >
              Task5
            </Link>
          </li>
        </ul>
      </AppBar>
      <h1>Welcome To Home Screeen</h1>
    </>
  );
}
export default App;
