import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
    const {quantity,name,totalPrice} = item;
    console.log(totalPrice)
  
    return (
      <li className="flex justify-between items-center my-2">
        <p className="text-sm w-12 text-left">{quantity}x</p>
        <h2 className="flex-1 text-center text-sm truncate">{name}</h2>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </li>

    );
  }
  
  export default OrderItem;