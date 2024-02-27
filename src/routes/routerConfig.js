import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../pages/HomePage";
import RegistratationPage from "../pages/RegistratationPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/DashBoard";
import TodoPage from "../pages/TodoPage";

// routers setup
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "register",
        element: <RegistratationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "todo",
        element: (
          <PrivateRoute>
            <TodoPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
