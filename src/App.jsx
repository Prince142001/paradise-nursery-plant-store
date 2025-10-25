import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home.jsx";
import ProductPage from "./ProductPage/ProductPage.jsx";
import Layout from "./Layout.jsx";
import CartDetail from "./CartDetail/CartDetail.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <ProductPage />,
        },
        {
          path: "cart-detail",
          element: <CartDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <Home />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
