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
  const { lastMileTravel } = resData?.info.sla;
  return (
    <div
      className="m-[20px] p-[10px] w-[240px] rounded-[5px] shadow-lg cursor-pointer hover:scale-95"
      style={csscard}
    >
      <img
        alt="res-logo"
        className="w-[100%] rounded-[10px] h-36"
        src={CDN + cloudinaryImageId}
      ></img>
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis font-black">
        {name}
      </h3>
      <h5 className="whitespace-nowrap overflow-hidden text-ellipsis font-normal">
        {cuisines.join(", ")}
      </h5>
      <h5>
        {locality}, {areaName}
      </h5>
      <span className="flex justify-between">
        <h4 className="bg-green-600 rounded-sm p-[2px]">{avgRating}</h4>
        <h4>•</h4>
        <h5>{costForTwo}</h5>
        <h4>•</h4>
        <h5>{lastMileTravel} km</h5>
      </span>
    </div>
  );
};

export const isOpen = (Restaurantcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          Open
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};

export default Restaurantcard;
