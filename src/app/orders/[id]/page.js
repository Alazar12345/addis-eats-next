import OrderStatus from "./OrderStatus";


async function getOrder(id) {
  const response = await fetch(
    `http://localhost:3000/api/orders/${id}`
  );

  return response.json();
}


export default async function OrderPage({ params }) {

  const { id } = await params;

  const order = await getOrder(id);


  return (
    <OrderStatus
      id={id}
      initialOrder={order}
    />
  );
}
