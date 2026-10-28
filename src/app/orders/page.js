import OrderTable from "./OrderTable";
import orders from "@/app/data/orders";

export default function OrdersPage({ searchParams }) {

  const sort = searchParams?.sort || "date";
  const page = Number(searchParams?.page || 1);

  const sortedOrders = [...orders].sort((a,b)=>{

    if(sort === "total"){
      return b.total - a.total;
    }

    if(sort === "customer"){
      return a.customer.localeCompare(b.customer);
    }

    return new Date(b.date) - new Date(a.date);

  });


  const perPage = 5;

  const start = (page - 1) * perPage;

  const pagedOrders = sortedOrders.slice(
    start,
    start + perPage
  );


  if(orders.length === 0){
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold">
          Orders
        </h1>

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