import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingPage from "./Components/ShoppingPage/ShoppingPage.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ProductPage from "./Components/ShoppingPage/ProductPage.jsx";
import { ChosenProductsProvider } from "./Components/ChosenProductsProvider"; // Import your context

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ShoppingPage",
    element: <ShoppingPage />,
  },
  {
    path: "ProductPage/:id",
    element: <ProductPage />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <React.StrictMode> */}
    <ChosenProductsProvider>
      <RouterProvider router={router} />
    </ChosenProductsProvider>
    {/* </React.StrictMode> */}
  </QueryClientProvider>
);
