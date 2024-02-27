import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../components/ImageComponent/Image";
import Login from "../components/Login/Login";

const LoginPage = () => {
  return (
    <Grid className="customContainer" container spacing={2}>
      <Grid item xs={12} md={5}>
        <Image />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#1976d2" }} variant="subtitle2" component="p">
          Login here!
        </Typography>

        <Typography sx={{marginTop:"10px",marginBottom:"15px"}} variant="h6" component="h1">
          Welcome Back!
        </Typography>
        <Login />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
