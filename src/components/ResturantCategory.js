import MenuItems from "./MenuItems";
import { useState } from "react";

const ResturantCategory = (props) => {
  const [showItems, setShowItems] = useState(false);
  const handleclick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {props.data.title} ({props.data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <MenuItems items={props.data.itemCards} />}
      </div>
    </div>
  );
};
export default ResturantCategory;
