import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./contexts/user-provider";
import { router } from "./routes/router";

function App() {
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
