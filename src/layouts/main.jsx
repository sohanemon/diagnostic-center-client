import { Outlet } from "react-router-dom";
import NavComponent from "../components/navbar";

const Main = () => {
  return (
    <>
      <NavComponent />
      <Outlet />
    </>
  );
};

export default Main;
