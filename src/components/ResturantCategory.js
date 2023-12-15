import MenuItems from "./MenuItems";
const ResturantCategory = (props) => {
  const handleclick = () => {
    props.setShowIndex();
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
        {props.showItems && <MenuItems items={props.data.itemCards} />}
      </div>
    </div>
  );
};
export default ResturantCategory;
