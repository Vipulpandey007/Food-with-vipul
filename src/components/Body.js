import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listofresturant, setListOfResturant] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const [filterSearchRes, setFilterSearchRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.328329&lng=85.320205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
            setFilterSearchRes(filterlist);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="restaurant-container">
        {filterSearchRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
            <Restaurantcard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
