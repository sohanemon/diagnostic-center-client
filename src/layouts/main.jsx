import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavComponent from "../components/navbar";

const Main = () => {
  return (
    <>
      <NavComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
