import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp.jsx";
import Home from "./components/Home/Home.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="CursorHW22/home" element={<Home />} />
        <Route path="CursorHW22/registration" element={<SignUp />} />
        <Route path="CursorHW22/" element={<SignIn />} />
      </Routes>
    </div>
  </BrowserRouter>
);
