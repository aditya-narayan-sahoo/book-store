import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/books/Order";

import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      { path: "/books/:id", element: <SingleBook /> },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <div>Admin Dashboard</div>
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <div>DashBoard Home</div>
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <div>Add New Book</div>
          </AdminRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoute>
            <div>Edit Book</div>
          </AdminRoute>
        ),
      },
      {
        path: "manage-book",
        element: (
          <AdminRoute>
            <div>Manage Book</div>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
