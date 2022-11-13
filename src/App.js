import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./contexts/user-provider";
import { router } from "./routes/router";
import { client } from "./utilities/axios-instances";

function App() {
  useEffect(() => {
    client
      .post("jwt")
      .then((res) => localStorage.setItem("token", JSON.stringify(res.data)));

    return () => {};
  }, []);

  return (
    <div className='font-poppins w-5/6 mx-auto'>
      <Toaster />
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
