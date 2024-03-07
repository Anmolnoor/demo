import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

// assets and styles
import router from "./router/router";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
