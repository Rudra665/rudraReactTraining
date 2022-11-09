import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import Task1 from "./Components/Task1/Task1";
import Task2 from "./Components/Task2/Task2";
import Task3 from "./Components/Task3/Task3";
import Task4 from "./Components/Task4/Task4";
import Task5 from "./Components/Task5/Task5";
import Inbox from "./Components/DashBoard/Menu/Inbox";
import Starred from "./Components/DashBoard/Menu/Starred";
import Spam from "./Components/DashBoard/Menu/Spam";
import AllMail from "./Components/DashBoard/Menu/AllMail";
import Trash from "./Components/DashBoard/Menu/Trash";
import Drafts from "./Components/DashBoard/Menu/Drafts";
import SendMail from "./Components/DashBoard/Menu/SendMail";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard/inbox" element={<Inbox />} />
          <Route path="/dashboard/trash" element={<Trash />} />
          <Route path="/dashboard/all-mail" element={<AllMail />} />
          <Route path="/dashboard/starred" element={<Starred />} />
          <Route path="/dashboard/drafts" element={<Drafts />} />
          <Route path="/dashboard/spam" element={<Spam />} />
          <Route path="/dashboard/send-mail" element={<SendMail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
