import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (

    <div className="pagebackground">

      {/* <Navbars /> */}
      <UserAuthContextProvider>
        <Routes>
          <Route path="/home" element={<ProtectedRoute>{<Home />}</ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserAuthContextProvider>
    </div >

  );
}

export default App;