import { Link } from "react-router-dom";

export default function ShopNow() {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-14">
      <div className="text-7xl font-bold text-center">
        Discover More Options
      </div>
      <button className="btn btn-primary w-1/2">
        <Link to="ShoppingPage">Shop Now</Link>
      </button>
    </div>
  );
}
