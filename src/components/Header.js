import { LOGO_URL } from "../utility/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import { useSelector } from "react-redux";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const [btnName, setBtnName] = useState(["login"]);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("clicked");
  };
  const cartItems = useSelector((store) => store.cart.items);

  const Onlinestatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center dark:text-white">
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
          <li onClick={handleThemeSwitch} className="cursor-pointer mr-5">
            {theme === "dark" ? (
              <IoMdSunny className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </li>
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-full login"
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
