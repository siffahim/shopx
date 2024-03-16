import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;

console.log("hi");
