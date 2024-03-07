import { RouterProvider } from "react-router-dom";

// assets and styles
import router from "./router/router";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
