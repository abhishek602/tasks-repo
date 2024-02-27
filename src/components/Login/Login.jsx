import React, { useContext, useState } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import LoginContext from "../context-store/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const isUserExists = () => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (!storedUserDetails) {
      return false;
    }

    // to check if at least one user matches the login details
    return storedUserDetails.some(
      (udetails) =>
        udetails &&
        udetails.email === loginDetails.email &&
        udetails.password === loginDetails.password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginDetails.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Validate password length and complexity
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(loginDetails.password)) {
      alert(
        "Password must be at least 8 characters long and include at least one special character, one uppercase letter, and one number."
      );
      return;
    }

    if (isUserExists()) {
      login();
      navigate('/dashboard');
      alert("Login Successful!");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <Paper elevation={6} style={{ padding: 16 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          value={loginDetails.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={loginDetails.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 8 }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
