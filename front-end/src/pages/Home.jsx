import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  console.log("user", user)
  const handleSubmit = async () => {
    try {
      await logOut()
      navigate("/login")

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div> {user && <div> Current user is: {user.email} </div>}
       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Logout
                
              </Button>
          </Box>
    </div>
  )
}

export default Home;