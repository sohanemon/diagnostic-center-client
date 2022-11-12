import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <div className='font-poppins w-5/6 mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
