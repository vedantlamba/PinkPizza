import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import Error from "./Ui/Error";
import Home from "./Ui/Home";
import Menu, { loader as MenuLoader } from "./Features/Menu/Menu";
import Order, { loader as orderLoader } from "./Features/Order/Order";
import Cart from "./Features/Cart/Cart";
import { action as updateAction } from "./Features/Order/UpdateOrder";
import CreateOrder, {
  action as createOrderAction,
} from "./Features/Order/CreateOrder";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/Order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateAction

      },
      {
        path: "/Order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
