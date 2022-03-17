import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Home from "./Home"


const ProtectedRoute = () => {
  let {user} = useUserAuth();
  if(!user) {
   return <Navigate to="/login" />
  }
  return <Home />;
}

export default ProtectedRoute;