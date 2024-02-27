import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import {useNavigate} from "react-router-dom"
const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <Container className="dashContainer">
      <Box my={4}>
        <Typography sx={{color:"rgb(137, 135, 135)", fontSize:"3rem"}} variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography sx={{color:"", fontSize:"2rem"}} variant="body1">Welcome to your dashboard.</Typography>

        <Button onClick={()=> navigate("/todo")}
          sx={{ background: "green" ,marginTop:"20px"}}
          variant="contained"
        >
          Access the Todo App
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
