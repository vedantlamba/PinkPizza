import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../Ui/Button";
import Header from "../../Ui/Header";
import { createOrder } from "../../services/apiRestaurent";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalPizzaPrice } from "../Cart/cartSlice";
import EmptyCart from "../Cart/EmptyCart";
import store from "../../store";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [isPriority, setIsPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const dispatch = useDispatch();
  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPizzaPrice);
  const priorityPrice = isPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;


  // const cart = [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  //   {
  //     pizzaId: 6,
  //     name: "Vegetale",
  //     quantity: 1,
  //     unitPrice: 13,
  //     totalPrice: 13,
  //   },
  //   {
  //     pizzaId: 11,
  //     name: "Spinach and Mushroom",
  //     quantity: 1,
  //     unitPrice: 15,
  //     totalPrice: 15,
  //   },
  // ];

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="bg-secondary-meduim h-[100vh] w-[100vw]">
      <Header />
      <div className="flex  justify-center items-center font-montserrat font-bold text-4xl bg-secondary-meduim">
        <div className="bg-secondary-meduim p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="mb-6 font-light text-center">Ready To Order?</h2>

          <Form method="POST" className="flex flex-col space-y-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-lg mb-2">Name</label>
              <input
                name="customer"
                className="rounded-full outline-none text-secondary-dark text-sm px-4 py-3 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary"
                type="text"
                required
              />
              {formErrors?.customer && (
                <p className="text-red-500 text-sm mt-2">
                  {formErrors.customer}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label className="text-lg mb-2">Phone Number</label>
              <input
                name="phone"
                className="rounded-full outline-none text-secondary-dark text-sm px-4 py-3 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary"
                type="tel"
                required
              />
              {formErrors?.phone && (
                <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>
              )}
            </div>

            {/* Address Field */}
            <div className="flex flex-col">
              <label className="text-lg mb-2">Address</label>
              <input
                name="address"
                className="rounded-full outline-none text-secondary-dark text-sm px-4 py-3 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary"
                type="text"
              />
              {formErrors?.address && (
                <p className="text-red-500 text-sm mt-2">
                  {formErrors.address}
                </p>
              )}
            </div>

            {/* Priority Checkbox */}
            <div className="flex items-center justify-start space-x-2">
              <input
                name="priority"
                id="priority"
                type="checkbox"
                className="h-5 w-5 text-primary"
                value={isPriority}
                onChange={(e) => setIsPriority(e.target.checked)}
              />
              <label
                htmlFor="priority"
                className="text-sm flex justify-around w-[100%] font-light"
              >
                Want To Give Your Order Priority?{" "}
                <div className="font-bold">{formatCurrency(totalPrice)}</div>
              </label>
            </div>

            {/* Hidden Cart Input */}
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className="bg-secondary-dark text-white rounded-full py-3 w-full hover:bg-secondary-dark/90 transition duration-300"
            >
              {isSubmitting ? "Placing Order..." : "Order Now"}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  //   console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  // console.log(order);

  // // console.log(order);
  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please Give Us Your Valid Phone Number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  // store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
  // return null;
}

export default CreateOrder;
