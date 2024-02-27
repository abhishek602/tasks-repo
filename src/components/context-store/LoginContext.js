import { createContext, useReducer } from "react";
import loginReducer from "./loginReducer";

const INITIAL_STATE = {
  isLoggedIn: false,
};

// initial state for Provider
const initIalProvidingValue = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const LoginContext = createContext(initIalProvidingValue);


// custm Provider component
export const LoginProvider = ({ children }) => {

  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

  //  action creater functions
  const loginHander = () => {
    dispatch({
      type: "LOGIN",
    });
  };

  const logoutHander = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        login: loginHander,
        logout: logoutHander,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
