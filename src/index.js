import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp.jsx";
import Home from "./components/Home/Home.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div>A</div>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);
