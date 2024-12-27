import { Link } from "react-router-dom";
import Button from "../../Ui/Button";
import { useSelector } from "react-redux";
import { getTotalPizzaPrice, getTotalPizzaQuantity } from "./cartSlice";

function CartOverview() {
  // const totalPizzaQuantityInCart = useSelector(
  //   (state) => state.cart.cart.reduce((acc, item) => acc + item.quantity),
  //   0
  // );

  const totalPizzaQuantityInCart = useSelector(getTotalPizzaQuantity);
  const totalPizzaPrice = useSelector(getTotalPizzaPrice);


  // if(!totalPizzaPrice) return;

  return (
    <div className="flex w-[100vw] justify-evenly mb-8">
      <div className="flex items-center justify-between w-40 font-montserrat text-black font-bold">
        <h2>{totalPizzaQuantityInCart} Pizzas</h2>
        <h2>{totalPizzaPrice}$</h2>
      </div>
      <Link
        to="/cart"
        className="border-2 font-montserrat border-secondary-dark px-3 py-1.5 bg-secondary-dark rounded-full"
      >
        Open Cart
      </Link>
    </div>
  );
}

export default CartOverview;
