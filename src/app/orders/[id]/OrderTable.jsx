import Link from "next/link";

export default function OrderTable({
  orders,
  page,
  totalPages,
  sort,
}) {
  return (
    <>
      <div className="mb-4 flex gap-4">
        <Link href={`/orders?sort=date`}>
          Sort by Date
        </Link>

        <Link href={`/orders?sort=total`}>
          Sort by Total
        </Link>

        <Link href={`/orders?sort=customer`}>
          Sort by Customer
        </Link>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Neighbourhood</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.customer}</td>
              <td className="border p-2">{order.neighbourhood}</td>
              <td className="border p-2">ETB {order.total}</td>
              <td className="border p-2">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex gap-4">
        {page > 1 && (
          <Link href={`/orders?page=${page - 1}&sort=${sort}`}>
            Previous
          </Link>
        )}

        {page < totalPages && (
          <Link href={`/orders?page=${page + 1}&sort=${sort}`}>
            Next
          </Link>
        )}
      </div>
    </>
  );
}