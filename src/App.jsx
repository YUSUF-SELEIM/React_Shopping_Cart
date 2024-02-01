import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShopWindow from "./Components/ShopWindow/ShopWindow";
import LoadingSpinner from "./Components/LoadingSpinner";
import ErrorPage from "./Components/ErrorPage";
import { ChosenProductsProvider } from "./Components/ChosenProductsProvider"; // Import your context

const fetchCarouselImages = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=10"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching carousel images: " + error.message);
  }
};

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carouselImages"],
    queryFn: fetchCarouselImages,
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <ChosenProductsProvider>
      <div className="flex flex-col w-full ">
        <ShopWindow carouselImages={data}></ShopWindow>
      </div>
    </ChosenProductsProvider>
  );
}

export default App;
