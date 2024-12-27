import { useFetcher } from "react-router-dom";
import Button from "../../Ui/Button";
import { updateOrder } from "../../services/apiRestaurent";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <div>
      <fetcher.Form method="PATCH">
        <Button type="primary" px="2">
          Make Priority
        </Button>
      </fetcher.Form>
    </div>
  );
}



export default UpdateOrder;

export async function action({request,params}) {
    const data = {priority: true}
    await updateOrder(params.orderId,data)
    return null;
}