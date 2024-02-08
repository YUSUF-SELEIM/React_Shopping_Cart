/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import ErrorPage from "../ErrorPage";
import { Link } from "react-router-dom";
import { useCallback } from "react";

export default function Products() {
  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      throw new Error("Error fetching Products: " + error.message);
    }
  }, []);
  const { data, isLoading, error } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchProducts,
    staleTime: Infinity, // Cache indefinitely
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-wrap gap-8 p-5 justify-center ">
      {data.map((product) => (
        <div
          key={product.id}
          className="mt-24 card w-80 bg-base-100 shadow-xl justify-between hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <figure className="px-5 pt-5">
            <img
              src={product.image}
              alt="Shoes"
              className="rounded-xl max-w-[100%] h-[30vh]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title w-60 truncate ">{product.title}</h2>
            <p className="text-xl font-bold text-green-700">
              {product.price} $
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">
                <Link to={`/ProductPage/${product.id}`}>View</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
