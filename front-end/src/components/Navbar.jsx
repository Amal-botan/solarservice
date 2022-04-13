import { React, Fragment } from "react";
// import {Container, Nav, Navbar} from "react-bootstrap"
// import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import "./Navbar.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Navbar = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  console.log("user", user)
  const handleSubmit = async () => {
    try {

      navigate("/login")      
      await logOut()
     

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="maincontainer">

      <Link className="btn" to="/home">Home</Link>
      <Link className="btn" to="/timeline">Timeline</Link>
      {user && <Link className="btn" to="/profile">Profile</Link>}

      {user && <Button
        type="submit"
        // fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        Logout

      </Button>
      }


      {!user &&

        <Link className="btn" to="/login">Login</Link>
      }


      {!user &&

        <Link className="btn" to="/register">Signup</Link>
      }

    </div>
  );
};

export default Navbar;
