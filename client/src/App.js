import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/LoginPage/Login";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
