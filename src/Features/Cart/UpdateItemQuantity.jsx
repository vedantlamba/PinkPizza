import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, getTotalPizzaPrice, increaseQuantity } from "./cartSlice";

function UpdateItemQuantity({ quantity, pizzaId }) {
  const dispatch = useDispatch();
  

  return (
    <div className="flex items-center">
      <button
        className="flex justify-center items-center border-2 px-3 font-montserrat border-secondary-dark bg-secondary-dark rounded-full"
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        -
      </button>
      <p className="mx-4">{quantity}</p>
      <button
        className="flex justify-center items-center border-2 px-3 font-montserrat border-secondary-dark bg-secondary-dark rounded-full"
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
