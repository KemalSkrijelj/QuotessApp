import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/LoginPage/Login";
import Quotes from "./pages/Quotes/Quotes";
import { UserProvider } from "./context/AppContext";
import ProtectedRoute from "./components/protect/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <UserProvider>
      <div>
        <NavBar />
        <main className="main-main">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Quotes />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/signUp"
              element={
                <ProtectedRoute>
                  <SignUp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quotes"
              element={
                <ProtectedRoute>
                  <Quotes />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
