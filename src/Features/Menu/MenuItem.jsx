import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import { addItem, getCurrentQuantity } from "../Cart/cartSlice";
import DeleteItem from "../Cart/DeleteItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));
  // console.log(currentQuantity);
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const item = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };

    console.log(dispatch(addItem(item)));
  }

  return (
    <div className="rounded-lg shadow-lg p-4 flex flex-col items-center m-4 w-64 h-96">
      <img
        className="w-32 h-32 object-cover border-2 border-secondary-dark rounded-full mb-4"
        src={imageUrl}
        alt={name}
      />
      <div className="text-left w-[100%]">
        <h2 className="text-lg text-left font-montserrat font-bold text-secondary-dark">
          {name}
        </h2>
        <p className="text-sm break-words text-gray-600 italic text-ellipsis font-montserrat max-h-16 mb-4">
          {ingredients.join(", ")}
        </p>
      </div>
      <h2 className="text-lg font-semibold text-stone-700 mt-auto font-EduVIC">
        ${unitPrice}
      </h2>

      {soldOut && (
        <span className="text-pink-500 px-4 my-4 py-1 rounded-full font-EduVIC bg-secondary-dark text-sm font-bold uppercase mt-2">
          Sold Out
        </span>
      )}

      <div className="flex flex-col justify-between items-center h-full">
        <div className="flex justify-center items-center w-full mt-auto">
          {!soldOut && !isInCart && (
            <button
              onClick={handleAddToCart}
              className="border-2 border-secondary-dark bg-secondary-dark px-4 py-2 rounded-full font-EduVIC"
            >
              Add To Cart
            </button>
          )}

          {isInCart && (
            <DeleteItem
              pizzaId={id}
              // className="border-2 border-secondary-dark bg-secondary-dark px-4 py-2 rounded-full font-EduVIC"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
