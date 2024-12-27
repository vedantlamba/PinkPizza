import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import Header from "../../Ui/Header";
import { MdArrowBack } from "react-icons/md";
import CartOverview from "./CartOverview";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div className="bg-secondary-meduim w-[100vw] h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <Button to="/menu" type="primary" px="4" py="1.5">
          <MdArrowBack className="mr-3" /> Back To Menu
        </Button>

        <div className="w-[100%] flex justify-center my-6">
          {/* Make the ul scrollable with a max-height */}
          <ul className="flex flex-col w-[100%] justify-center items-center max-h-[400px] overflow-y-auto space-y-4 space-x-3">
            {cart.map((item) => (
              <CartItem key={item.pizzaId} item={item} />
            ))}
          </ul>
        </div>

        <div>
          {!cart.length && (
            <p className="text-2xl mb-6 text-black font-light font-EduVIC">
              Your Cart Is Empty
            </p>
          )}
        </div>

        <div className="flex flex-col items-center sm:flex-row w-full sm:w-[40%] justify-center sm:justify-evenly gap-4 sm:gap-0">
          <Button to="/order/new" type="primary" px="4" py="1.5">
            Order Pizza
          </Button>
          <Button
            type="primary"
            onClick={() => dispatch(clearCart())}
            px="4"
            py="1.5"
          >
            Clear Cart
          </Button>
        </div>
      </div>

      <CartOverview />
    </div>
  );
}

export default Cart;
