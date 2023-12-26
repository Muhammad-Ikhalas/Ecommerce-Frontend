import React from "react";
import { useState } from "react";
// import axios from "axios";
import "./Login.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Login({ userDataHandler }, props) {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   console.log(location);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    const { email, password } = user;
    // if (email && password) {
    //   axios.post("http://localhost:5000/signin", user).then((res) => {
    //     userDataHandler(res.data.user);
    //     window.localStorage.setItem("token", res.data.token);
    //     window.localStorage.setItem("userId", res.data.user._id);
    //     window.localStorage.setItem("isAdmin", res.data.user.isAdmin);
    //     window.localStorage.setItem("email", res.data.user.email);
    //     window.localStorage.setItem("name", res.data.user.name);
    //     console.log(res);
    //     if (res.data.user.isAdmin === false) {
    //       navigate("/mainpage");
    //     } else {
    //       navigate("/adminTable");
    //     }
    //   });

    //   console.log(user);
    // } else {
    //   alert("invalid input");
    // }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar id="person-icon" sx={{ m: 1, bgcolor: "dark.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={ChangeHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={ChangeHandler}
              value={user.email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={ChangeHandler}
              value={user.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={
                <Checkbox id="login-label" value="remember" color="primary" />
              }
              label="Remember me"
            />
            <Button
              onClick={login}
              className="submit-btn"
              id="submit-button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link className="link-color" href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <div
                  className="link-color"
                  href=""
                  variant="body2"
                  //   onClick={() => navigate("/register")}
                >
                  {"Don't have an account? Sign Up"}
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
