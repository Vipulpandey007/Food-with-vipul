import { LOGO_URL } from "../utility/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState(["login"]);

  const cartItems = useSelector((store) => store.cart.items);

  const Onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg m-3">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4 text-xl">
          <li className="px-4">
            Online Status:{Onlinestatus ? "True" : "False"}
          </li>
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart -({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 py-2 bg-red-200 rounded-full login"
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
