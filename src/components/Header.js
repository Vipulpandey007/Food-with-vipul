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
    <div className="flex justify-between items-center shadow-lg w-[100vw] h-[80px] rounded-[5px] fixed z-[999] top-0 left-0 overflow-y-hidden bg-white dark:bg-slate-700 dark:text-white">
      <div className="logo-container">
        <img className="w-[90px]" src={LOGO_URL} />
      </div>
      Online Status:{Onlinestatus ? "True" : "False"}
      <div>
        <ul className="flex items-center mr-[30px]">
          <li className="p-[10px] hover:bg-orange-400 hover:rounded-[5px] hover:text-white">
            <Link to="/">Home </Link>
          </li>
          <li className="p-[10px]  hover:bg-orange-400 hover:rounded-[5px] hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="p-[10px]  hover:bg-orange-400 hover:rounded-[5px] hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-[10px]  hover:bg-orange-400 hover:rounded-[5px] hover:text-white">
            <Link to="/cart">Cart -({cartItems.length} items)</Link>
          </li>
          <li
            onClick={handleThemeSwitch}
            className="cursor-pointer mr-5  hover:bg-orange-400 hover:rounded-[5px] hover:text-white"
          >
            {theme === "dark" ? (
              <IoMdSunny className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </li>
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-full login  hover:bg-orange-400 hover:rounded-[5px] hover:text-white"
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
