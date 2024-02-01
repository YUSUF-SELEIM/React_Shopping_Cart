import { useChosenProducts } from "../ChosenProductsProvider";
import EmptyCart from "./EmptyCart";
import Navbar from "../ShopWindow/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const { chosenProducts, setChosenProducts } = useChosenProducts();
  if (!chosenProducts.size) {
    return <EmptyCart></EmptyCart>;
  }

  const totalPrice = Array.from(chosenProducts.values()).reduce(
    (total, product) => {
      return total + product.price;
    },
    0
  );
  const increaseQuantity = (title) => {
    setChosenProducts((prevChosenProducts) => {
      const updatedProductsMap = new Map(prevChosenProducts);
      updatedProductsMap.get(title).quantity++;
      updatedProductsMap.get(title).price +=
        updatedProductsMap.get(title).originalPrice;

      return updatedProductsMap;
    });
  };
  const decreaseQuantity = (title) => {
    setChosenProducts((prevChosenProducts) => {
      const updatedProductsMap = new Map(prevChosenProducts);
      updatedProductsMap.get(title).quantity--;
      updatedProductsMap.get(title).price -=
        updatedProductsMap.get(title).originalPrice;
      if (updatedProductsMap.get(title).quantity == 0) {
        updatedProductsMap.delete(title);
      }

      return updatedProductsMap;
    });
  };

  const deleteProduct = (title) => {
    setChosenProducts((prevChosenProducts) => {
      const updatedProductsMap = new Map(prevChosenProducts);
      updatedProductsMap.delete(title);

      return updatedProductsMap;
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2>Cart</h2>
      {console.log(chosenProducts)}
      <div className="flex flex-col px-7">
        {Array.from(chosenProducts.entries()).map(([title, product], index) =>
          product.quantity ? (
            <div
              key={index}
              className="mt-16 flex flex-wrap items-center justify-center md:justify-between space-x-10 space-y-8 md:space-x-0 md:space-y-0"
            >
              <Link to={`/ProductPage/${product.id}`}>
                <img
                  src={product.image}
                  className="rounded-xl max-w-20 h-[15vh]"
                />
              </Link>
              <span>${parseInt(product.price)}</span>
              <span className="w-52 truncate md:whitespace-normal">
                {title}
              </span>
              <div className="w-44 flex justify-between items-center">
                <button
                  className="btn btn-circle btn-outline"
                  onClick={() => increaseQuantity(title)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </button>
                <span className="text-2xl">{product.quantity}</span>
                <button
                  className="btn btn-circle btn-outline"
                  onClick={() => decreaseQuantity(title)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 12h12"
                    />
                  </svg>
                </button>
              </div>

              <button
                className="btn btn-ghost mr-6"
                onClick={() => deleteProduct(title)}
              >
                <svg
                  fill="#cc0000"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 408.483 408.483"
                  stroke="#cc0000"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z" />{" "}
                        <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z" />{" "}
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
      <div className="flex justify-end p-4">
        <div className="flex flex-col justify-between items-center  space-y-4">
          <p className="text-xl">Overall Total: ${parseInt(totalPrice)}</p>
          <Link to={"/ShoppingPage"}>
            <button className="btn btn-outline btn-accent">
              Keep Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
