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
    deliveryTime,
    avgRating,
  } = resData?.info;
  return (
    <div className="res-card" style={csscard}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Ratings {avgRating} stars</h4>
      <h4>Delivery time {deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
