
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      
        <RouterProvider router={routes} />
        <Toaster/>
    </div>
  );
}

export default App;
