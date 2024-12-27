import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, unitPrice, quantity, pizzaId } = item;

  return (
    <li className="flex p-2 sm:p-4 flex-col sm:flex-row items-center justify-between w-full border-b border-gray-200">
      <p className="text-xs sm:text-sm">{quantity}x {name}</p>
      <p className="text-xs sm:text-sm mr-4 ml-2">{unitPrice}$</p>
      <div className="flex w-full sm:w-auto justify-between sm:flex-row sm:justify-start text-xs sm:text-sm">
        <UpdateItemQuantity quantity={quantity} pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
