import OrderTable from "./OrderTable";
import orders from "@/app/data/orders";

export default async function OrdersPage({ searchParams }) {
   await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );
  const sort = searchParams?.sort || "date";
  const page = Number(searchParams?.page || 1);

  const sortedOrders = [...orders].sort((a, b) => {
    switch (sort) {
      case "total":
        return b.total - a.total;

      case "customer":
        return a.customer.localeCompare(b.customer);

      case "date":
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  const perPage = 3;

  const start = (page - 1) * perPage;

  const pagedOrders = sortedOrders.slice(start, start + perPage);
  if (orders.length === 0) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>

      <p>No orders yet.</p>
    </main>
  );
}
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Orders
      </h1>

      <OrderTable
        orders={pagedOrders}
        page={page}
        totalPages={Math.ceil(sortedOrders.length / perPage)}
        sort={sort}
      />
    </main>
  );
}