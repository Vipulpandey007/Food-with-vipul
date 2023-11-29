import { LOGO_URL } from "../utility/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState(["login"]);

  const Onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg m-3">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4">
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
          <li className="px-4">Cart</li>
          <button
            className="login"
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
