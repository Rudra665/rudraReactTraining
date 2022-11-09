import { Link, Outlet } from "react-router-dom";
import "./app.css";
import AppBar from "@mui/material/AppBar";

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
        <ul className="navbar">
          <li>
            <Link to="/Task1" style={{ color: "aliceblue", fontSize: "24px" }}>
              Task1
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Task2" style={{ color: "aliceblue", fontSize: "24px" }}>
              Task2
            </Link>
          </li>
          <li>
            <Link to="/Task3" style={{ color: "aliceblue", fontSize: "24px" }}>
              Task3
            </Link>
          </li>
          <li>
            <Link to="/Task4" style={{ color: "aliceblue", fontSize: "24px" }}>
              Task4
            </Link>
          </li>
          <li>
            <Link to="/Task5" style={{ color: "aliceblue", fontSize: "24px" }}>
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
