import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import AddService from "../pages/add-service";
import DoctorRegistration from "../pages/doctor-registration";
import Home from "../pages/home";
import Login from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/doctor",
        element: <DoctorRegistration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login reg />,
      },
    ],
  },
]);
