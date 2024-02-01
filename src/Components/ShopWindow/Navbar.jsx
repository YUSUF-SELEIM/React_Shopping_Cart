/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-gray-100 fixed shadow-2xl z-10">
      <div className="navbar-center">
        <button className="text-xl -skew-y-12 origin-bottom font-extrabold hover:skew-y-0">
          <Link to={"/"}>Garments</Link>
        </button>
      </div>
    </div>
  );
}
