import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Layouts/Dashboard";
import Main from "./Layouts/Main";
import LogIn from "./pages/Authentication/LogIn";
import SignUp from "./pages/Authentication/SignUp";
import BuyersList from "./pages/Dashboard/BuyersList";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import MyProducts from "./pages/Dashboard/MyProducts";
import Reported from "./pages/Dashboard/Reported";
import SalersList from "./pages/Dashboard/SalersList";
import SideNav from "./pages/Dashboard/SideNav";
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
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/salers",
        element: <SalersList />,
      },
      {
        path: "/dashboard/buyers",
        element: <BuyersList />,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/reported",
        element: <Reported />,
      },
    ],
  },
]);
export default router;
