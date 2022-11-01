import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp.jsx";
import Home from "./components/Home/Home.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/registration">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="*">
          <Navigate to="/signin" replace={true} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);
