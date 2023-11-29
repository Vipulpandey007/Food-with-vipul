import { useState, useEffect } from "react";
import { MENU_API } from "../utility/constant";
const useResturantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResMenu(json.data);
  };
  return resMenu;
};
export default useResturantMenu;
