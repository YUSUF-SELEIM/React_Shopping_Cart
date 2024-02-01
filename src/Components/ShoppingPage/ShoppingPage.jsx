import Navbar from "./Navbar";
import Products from "./Products";
import {useChosenProducts } from "../ChosenProductsProvider"; // Import your context


export default function ShoppingPage() {
    const { chosenProducts, addChosenProduct } = useChosenProducts();

    const handleAddChosenProduct = (product) => {
      addChosenProduct(product);
    };

  return (
    <div>
      <Navbar chosenProducts={chosenProducts}></Navbar>
      <Products
        handleAddChosenProductsInCart={handleAddChosenProduct}
      ></Products>
    </div>
  );
}
