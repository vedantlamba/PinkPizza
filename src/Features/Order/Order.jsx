import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurent";
import Button from "../../Ui/Button";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  console.log(order);
  const {
    customer,
    cart,
    status,
    priority,
    priorityPrice,
    id,
    estimatedDelivery,
    orderPrice,
  } = order.data;
  console.log(
    customer,
    cart,
    status,
    priority,
    priorityPrice,
    id,
    estimatedDelivery,
    orderPrice
  );
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center bg-secondary-meduim p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row w-full sm:w-1/2 justify-evenly font-bold text-center space-y-4 sm:space-y-0">
        <h2 className="text-lg sm:text-2xl font-montserrat">
          Order <span className="font-light text-pink-400">#{id}</span>
        </h2>
        <h2 className="text-lg sm:text-2xl font-montserrat">
          Status:{" "}
          {priority ? (
            <span className="bg-secondary-dark ml-2 font-light py-1 px-4 rounded-3xl">
              Priority
            </span>
          ) : (
            ""
          )}{" "}
          <span className="bg-lime-300 font-light py-1 px-4 rounded-3xl">
            {status === "preparing" ? "Preparing Order" : ""}
          </span>
        </h2>
      </div>
      {/* /////////////////////////////////// */}
      <div className="flex flex-col mt-8 justify-center items-center w-full sm:w-1/2">
        <div className="text-sm sm:text-lg flex flex-col sm:flex-row justify-evenly items-center font-light w-full space-y-4 sm:space-y-0">
          <p>
            {deliveryIn >= 0
              ? "Your Order Is On The Way"
              : "Your Order Should Have Arrived"}{" "}
          </p>
          <p>Estimated delivery: {formatDate(estimatedDelivery)}</p>
        </div>
        <div className="w-full my-8">
          <ul>
            {cart.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        {/* /////////////////////////// */}
        <div className="flex flex-col sm:flex-row w-full font-bold items-center justify-evenly space-y-4 sm:space-y-0">
          <h2>Price pizza: {formatCurrency(orderPrice)}</h2>
          <h2>
            To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </h2>
          {!priority && <UpdateOrder order={order} />}
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
