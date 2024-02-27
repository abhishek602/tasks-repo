import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../components/ImageComponent/Image";

import Registration from "../components/Registration/Registration";

const RegistratationPage = () => {
  return (
    <Grid className="customContainer" container spacing={2}>
      <Grid item xs={12} md={5}>
        <Image />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#1976d2" }} variant="subtitle2" component="p">
          Register here!
        </Typography>

        <Typography
          sx={{ marginTop: "10px", marginBottom: "15px" }}
          variant="h6"
          component="h1"
        >
          Welcome Back!
        </Typography>
        <Registration />
      </Grid>
    </Grid>
  );
};

export default RegistratationPage;
