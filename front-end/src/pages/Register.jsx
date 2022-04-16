import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUserAuth } from "../context/UserAuthContext";
import {useState} from "react";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { db } from '../firebase'; 
import { collection, addDoc, setDoc, doc } from "firebase/firestore";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const  { signUp } = useUserAuth();
  
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const userCollectionRef = collection(db, "users");


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email')
    const password = data.get('password')
    try {
      
      const {user} =  await signUp(email, password);
      console.log(user.uid)
      navigate("/home")
       const newUser = {email: email, password: password, user_id: user.uid, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX////f39/d3d38/Pzh4eHs7Ozy8vL4+Pj19fXq6urk5OTv7+/m5ubr6+v29/bn6Of+ydA3AAAEWElEQVR4nO2d2XLDIAxFbcDGW5r//9vGbdM2xU4EKha+6Dx0pm/kjJBYDDSNoiiKoiiKoiiKoiiKoiiKoiiKoiiKohyOtbbv/e2vlW5JGdh5HifTrhjjxrnz0i2Sxi/OfAr54vafc3Nfrxi7tA9CfomZbn1JunkSeLcl5FvMch2kW3g4/WaMPITLMtcVLM+j5Jteup1HspCU3LpQPfl2eNVzfqzM0m09igvZSWuulWQVspFViqtAivfXGCdt6+CTymDoHecuBTxShlghFUiZUpxgS6FX4QegS3Jkev0Bd0jr08JkjRTY3pPupB2l254L4jxnE9RRSlrV+QQ1zXKcOOnG5yGxEn9iMFfeZpYTzHLM6TqonYcTJqgDfJYSTCdenQR0vL7TIhYeVtkBnRxznXTSPyADI0sJpBNL2/yrywkzxaoTdaJOEp0g1mLeFBBzzHbhKYEc2zPHbJBOmPMdSCc9S0nbSrc/C6yBLGIpbphrSqDrsaxJIKgT1l4G6kYgZ9Q2STc+D6zVAgfZd+zE6juQ8x3uGjXiNyjMsb06USc01EkQJoifb3FzLGCYcONkkW5/Dnh76KDfKWmYhLDC5E269XmION8VMCFm2Ia3VnCVbnwmOPNiVCeMagy6GnvDJocJ4lzni6SjbyuwYdKk74/ihkmTuPGFOji5Y8foRIt/bUHsdyj4Z66b2K0v0L2uP8Sto6gTdaJO7kSW4xpSbOQ6ShVlJ7LwgO6d/+XlTWQPcSLd2mOIWqyuIsU2UZ0HdLk+hHhn3Qd1pNgmIlCqCZOIu2Fgl2FDqHEC+W3SDguxGuMuTYeQnWichNQyOmnolwhBnsXYgZpja3LSqZMA8m66dEMPhLwfKN3QAyHPjKUbeiDqJITqpKYcS90LVCcb1LNUQHZS0xyQHCeI39jvQN72qmMXsFkPwVGVrKsFVaTZuE9CjevxrfjYE7XGXaCt2Jm8nPTbihlRrdjZbT/iRbACuZfuB+d4h5qmAertM+vH+LdDwmAx04BiZeiYEfLby4hQnIfkJLJj5exHvvzMvOVx04q7nDfh2vkfssi2lus5rdguQ4z8WFnOt47g+/9LrDtWxnNZseP/JtYdK9N5rLztPDqbxcopSnOfMqVJZ+qKtzLwbghKwExFrybYjnshapoVN5Vamm32UvOEIntQ3uHIa8orzf0sGCNfUsy1pBXtW6eRNvKBKeVmu7T1xEyYpYQXj+U7zV+k063l3hyVAel3oDn3vGREUgr7HrpMCEYK962UbAjuM8ffPXAUcgc6RGY3NKQ6D+Pt3dyYizoJkDpvyruIPC9STjhvNOdGqhqXWolXhKpxsaOTFXUSIuTkTfp3P0PISdRdDEejTkLUSYg62UDms/SyncgMZAtdY7sjMpAteWgvNbiX/tXPUScbSGyrFz20b2XOzZXuRGKAok7O50TkPpmynYjcsZN8MfsxiJzDLXD3/AGJowqlO5EYtHXGlQzjeZp3TSc+LoSs340AAAAASUVORK5CYII="}
       await setDoc(doc(db, "users", user.uid), newUser);

      // setLoading(true); to make a loading and remove button, do that later
    } catch(err) {
      setError(err.message);
    }
    // setLoading(false);
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && <Alert severity="error">{ error }</Alert>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}