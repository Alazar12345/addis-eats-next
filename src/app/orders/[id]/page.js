import OrderStatus from "./OrderStatus";
import { getSession } from "@/lib/auth";


async function getOrder(id) {
  const response = await fetch(
    `http://localhost:3000/api/orders/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch order");
  }

  return response.json();
}


export default async function OrderPage({ params }) {

  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const { id } = await params;

  const order = await getOrder(id);


  return (
    <OrderStatus
      id={id}
      initialOrder={order}
    />
  );
}