import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(deleteItem(pizzaId))}
      className={`flex justify-center items-center ml-4 border-2  px-4 py-2 font-montserrat border-secondary-dark bg-secondary-dark rounded-full`}
    >
      Delete
    </button>
  );
}

export default DeleteItem;
