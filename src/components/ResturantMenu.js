import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utility/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
const ResturantMenu = () => {
  const { resId } = useParams();

  const resMenu = useResturantMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </h3>
      {categories.map((category) => (
        <ResturantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
        />
      ))}
    </div>
  );
};
export default ResturantMenu;
