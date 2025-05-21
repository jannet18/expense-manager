import React from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/dashboard/Home";
import Expense from "./pages/dashboard/Expense";
import Income from "./pages/dashboard/Income";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </UserProvider>
  );
}

export default App;

const Root = () => {
  // check is token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  // redirect to dashboard if authenticated ,otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
