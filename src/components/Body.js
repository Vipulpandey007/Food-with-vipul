import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofresturant, setListOfResturant] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const [filterSearchRes, setFilterSearchRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfResturant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterSearchRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofresturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button">
        <input
          type="text"
          className="filter-search"
          placeholder="Search resturants..."
          value={searchRes}
          onChange={(e) => {
            setSearchRes(e.target.value);
          }}
        ></input>
        <button
          className="filter"
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
          className="filter"
          onClick={() => {
            const filterlist = listofresturant.filter(
              (resfi) => resfi.info.avgRating > 4
            );
            setListOfResturant(filterlist);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="restaurant-container">
        {filterSearchRes.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
