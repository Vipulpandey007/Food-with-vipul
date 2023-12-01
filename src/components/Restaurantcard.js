import { CDN } from "../utility/constant";

const csscard = {
  backgroundColor: "pink",
};

const Restaurantcard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    areaName,
    avgRating,
    locality,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[270px]" style={csscard}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN + cloudinaryImageId}
      ></img>
      <h3 className="font-bold pb-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Ratings {avgRating} stars</h4>
      <h4>
        {locality}, {areaName}
      </h4>
    </div>
  );
};

export const isOpen = (Restaurantcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          Is Open
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};

export default Restaurantcard;
