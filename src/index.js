import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from './App';
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task5 from './Task5'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    
      {/* <Routes>
        <Route path="/" element={<App />}> 
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
          <Route path="/Task4" element={<Task4 />} />
          <Route path="/Task5" element={<Task5 />} />
         </Route> 
      </Routes> */}
      
      
    </BrowserRouter>
    
  </React.StrictMode>

);
