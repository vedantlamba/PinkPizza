const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed Getting Menu");

  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Failed To Get Order id: #${id}`);
  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
    console.log(`order to be send : ${JSON.stringify(newOrder)}`);
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) return Error();
    const {data} = await res.json();
    return data;
  } catch {
    throw Error("Failed To Create New Order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    // const data = await res.json();
    // return data;
  } catch {
    throw Error("failed to update order!");
  }
}
