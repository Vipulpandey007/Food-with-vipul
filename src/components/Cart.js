import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utility/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-2xl">Cart Items</h1>
      <button
        className="p-2 m-c bg-black text-white rounded-lg "
        onClick={handleClear}
      >
        Clear
      </button>
      <div
        className="w-6/12 m-auto
      "
      >
        {cartItems.length === 0 && (
          <h1>Cart is empty , Add items to the cart</h1>
        )}
        <MenuItems items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
