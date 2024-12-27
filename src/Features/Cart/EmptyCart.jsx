import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="bg-secondary-meduim font-EduVIC h-[100vh] text-2xl">
      <Link to="/menu">&larr; Back to menu</Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
