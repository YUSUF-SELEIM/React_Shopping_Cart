import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "./ProductNavbar";
import LoadingSpinner from "../LoadingSpinner";
import ErrorPage from "../ErrorPage";
import { useChosenProducts } from "../ChosenProductsProvider";
import Zoom from "react-img-zoom";

const fetchSelectedProducts = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Products: " + error.message);
  }
};

export default function ProductPage() {
  const { chosenProducts, addChosenProduct } = useChosenProducts();
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["SelectedProducts", id],
    queryFn: () => fetchSelectedProducts(id),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <Navbar chosenProducts={chosenProducts}></Navbar>
      <div className="w-full px-4 flex flex-col items-center mt-10 h-[80vh] md:mt-0 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="cursor-zoom-in">
          <Zoom img={data.image} zoomScale={2} width={600} height={400} />
        </div>
        <div className="h-[70%] flex flex-col justify-between">
          <div>
            <div className="text-3xl">{data.title}</div>
            <div className="w-full flex space-x-8 py-4">
              <div className=" text-sm">{data.rating.rate} ⭐</div>
              <div className=" text-sm">
                🛒 {data.rating.count} sold recently
              </div>
            </div>
          </div>
          <div className="flex justify-end px-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-2xl font-bold text-green-700 ">
                {data.price}
                <span className="text-3xl">$</span>
              </div>
              <button
                className="btn btn-accent"
                onClick={() => addChosenProduct(data)}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">Product Description</div>
            <div className="text-sm">{data.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
