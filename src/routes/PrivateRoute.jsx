import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoginContext from '../components/context-store/LoginContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;