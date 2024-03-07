import HomePage from "@/pages";
import ClothsPage from "@/pages/cloths";
import { NotFound } from "@/pages/notFound";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFound />}>
      <Route index element={<HomePage />} />
      <Route path="/cloths" element={<ClothsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

export default router;
