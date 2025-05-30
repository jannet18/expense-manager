import React, { useCallback, useContext } from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/dashboard/Home";
import Expense from "./pages/dashboard/Expense";
import Income from "./pages/dashboard/Income";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
}

export default App;

const Root = () => {
  const { user } = useContext(UserContext);
  return <Navigate to={user ? "/dashboard" : "/login"} />;
};
