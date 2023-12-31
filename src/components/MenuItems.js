import { useDispatch } from "react-redux";
import { CDN } from "../utility/constant";
import { addItem } from "../utility/cartSlice";
const MenuItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 bg-white text-black shadow-lg  mx-20 my-12 rounded-lg"
                onClick={() => handleAddItems(item)}
              >
                Add+
              </button>
            </div>
            <img className="w-36" src={CDN + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuItems;
