const loginReducer = (state, action) => {
  let newState = state;

  if (action.type === "LOGIN") {
    newState = { isLoggedIn: true };
  } else if (action.type === "LOGOUT") {
    newState = { isLoggedIn: false };
  }
  return newState;
};

export default loginReducer;
