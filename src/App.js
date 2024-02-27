import React from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { LoginProvider } from "./components/context-store/LoginContext";
import { Provider } from "react-redux";
import { store } from "./components/redux-store/store";

import router from "./routes/routerConfig";

const App = () => {
  return (
    <React.StrictMode>
      <LoginProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </LoginProvider>
    </React.StrictMode>
  );
};

export default App;
