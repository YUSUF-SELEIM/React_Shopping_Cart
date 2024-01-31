import ShopWindow from "./Components/ShopWindow/ShopWindow";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchCarouselImages = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
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
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen">
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-red-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Network Error
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Are you offline ?
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full ">
      <ShopWindow carouselImages={data}></ShopWindow>
    </div>
  );
}

export default App;
