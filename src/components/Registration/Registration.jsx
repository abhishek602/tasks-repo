import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import LoginContext from "../context-store/LoginContext";

const Registration = ({ switchToLogin }) => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const isUserExists = (email, storedUserDetails) => {
    if (!storedUserDetails) {
      return false;
    }

    return storedUserDetails.some(
      (udetails) => udetails && udetails.email === email
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for required fields
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.mobileNumber ||
      !userDetails.email ||
      !userDetails.password
    ) {
      alert("All fields are required!");
      return;
    }

    // Validate mobile number length
    if (userDetails.mobileNumber.length !== 10) {
      alert("Mobile number must be 10 characters long!");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Validate password length and complexity
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(userDetails.password)) {
      alert(
        "Password must be at least 8 characters long and include at least one special character, one uppercase letter, and one number."
      );
      return;
    }

    const newUserDetails = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobileNumber: userDetails.mobileNumber,
      email: userDetails.email,
      password: userDetails.password,
    };

    let storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    // isUserExists function has been updated based on previous advice
    if (isUserExists(newUserDetails.email, storedUserDetails)) {
      alert("Email already exists!");
      return;
    }

    if (!storedUserDetails) {
      storedUserDetails = [];
    }

    let newUserDetailsList = [...storedUserDetails, newUserDetails];
    console.log(newUserDetailsList);

    localStorage.setItem("userDetails", JSON.stringify(newUserDetailsList));

    alert("Registration Successful!");
    login(); // Switch to login view
    navigate("/dashboard");
  };

  return (
    <Paper elevation={6} style={{ padding: 16 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="First Name"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Last Name"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Mobile Number"
          name="mobileNumber"
          type="text"
          value={userDetails.mobileNumber}
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={userDetails.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 8 }}
        >
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Registration;
