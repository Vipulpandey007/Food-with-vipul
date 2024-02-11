import Restaurantcard, { isOpen } from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import { isOpen } from "./Restaurantcard";
const Body = () => {
  const [listofresturant, setListOfResturant] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const [filterSearchRes, setFilterSearchRes] = useState([]);

  const Open = isOpen(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.328329&lng=85.320205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log();
    setListOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterSearchRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Connect to Internet</h1>;
  return listofresturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 p-4 text-center">
        <input
          type="text"
          className="border border-solid border-black rounded-lg p-2 w-80"
          placeholder="Search resturants..."
          value={searchRes}
          onChange={(e) => {
            setSearchRes(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-2 m-3 bg-green-100 rounded-full"
          onClick={() => {
            const filterres = listofresturant.filter((resn) =>
              resn.info.name.toLowerCase().includes(searchRes.toLowerCase())
            );
            setFilterSearchRes(filterres);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-red-200 rounded-full"
          onClick={() => {
            const filterlist = listofresturant.filter(
              (resfi) => resfi.info.avgRating > 4
            );
            setFilterSearchRes(filterlist);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterSearchRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <Open resData={restaurant} />
            ) : (
              <Restaurantcard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
