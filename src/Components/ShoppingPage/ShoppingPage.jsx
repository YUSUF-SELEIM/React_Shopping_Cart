import Navbar from "./Navbar";
import Products from "./Products";
import { useChosenProducts } from "../ChosenProductsProvider"; // Import your context

export default function ShoppingPage() {
  const { chosenProducts } = useChosenProducts();

  return (
    <div>
      <Navbar chosenProducts={chosenProducts}></Navbar>
      <Products></Products>
    </div>
  );
}
