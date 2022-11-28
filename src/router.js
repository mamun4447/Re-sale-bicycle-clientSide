import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Layouts/Dashboard";
import Main from "./Layouts/Main";
import ErrorPage from "./pages/Authentication/ErrorPage";
import LogIn from "./pages/Authentication/LogIn";
import SignUp from "./pages/Authentication/SignUp";
import AddProduct from "./pages/Dashboard/AddProduct";
import BuyersList from "./pages/Dashboard/BuyersList";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import MyProducts from "./pages/Dashboard/MyProducts";
import Reported from "./pages/Dashboard/Reported";
import SalersList from "./pages/Dashboard/SalersList";
import Blog from "./pages/HomePages/Blog";
import Home from "./pages/HomePages/Home";
import Products from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
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
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://cycle-server.vercel.app/categories/${params.id}`, {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
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
      {
        path: "/dashboard/add-products",
        element: <AddProduct />,
      },
    ],
  },
]);
export default router;
