import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const UserTimeline = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

 

  return (
    <div>
      {user && <div> Current user is: {user.email} your id is {user.uid} </div>}


    </div>
  )
}

export default UserTimeline;