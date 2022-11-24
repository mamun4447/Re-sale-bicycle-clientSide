import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import LogIn from "./pages/Authentication/LogIn";
import SignUp from "./pages/Authentication/SignUp";
import Home from "./pages/HomePages/Home";
import Products from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/categories/:id",
        element: <Products />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);
export default router;
