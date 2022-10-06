import React from "react";
import ReactDOM from 'react-dom/client';
import { App, Task1, Task2, Task3, Task4, Task5 } from './App';

import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
          <Route path="/Task4" element={<Task4 />} />
          <Route path="/Task5" element={<Task5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
