import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Timeline from "./Timeline"


const ProtectedRouteTimeline = (props) => {
  // const user = useContext(useUserAuth);

   let {user} = useUserAuth();
  if(!user) {
   return <Navigate to="/login" />
  }
  return <Timeline/>
}

export default ProtectedRouteTimeline;