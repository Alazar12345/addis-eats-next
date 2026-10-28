import Link from "next/link";

export default function OrderTable({
  orders,
  page,
  totalPages,
  sort,
}) {

  if (orders.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">
          No Orders Found
        </h2>

        <p>
          There are currently no orders to display.
        </p>
      </div>
    );
  }


  return (
    <>

      <div className="mb-4 flex gap-4">

        <Link href="/orders?sort=date">
          Sort by Date
        </Link>


        <Link href="/orders?sort=total">
          Sort by Total
        </Link>


        <Link href="/orders?sort=customer">
          Sort by Customer
        </Link>

      </div>



      <table className="w-full border-collapse border">

        <caption className="text-left mb-3 font-semibold">
          Customer orders
        </caption>


        <thead>

          <tr>

            <th
              scope="col"
              className="border p-2"
            >
              Customer
            </th>


            <th
              scope="col"
              className="border p-2"
            >
              Neighbourhood
            </th>


            <th
              scope="col"
              className="border p-2"
            >
              Total
            </th>


            <th
              scope="col"
              className="border p-2"
            >
              Date
            </th>

          </tr>

        </thead>



        <tbody>

          {orders.map((order) => (

            <tr key={order.id}>

              <td className="border p-2">
                {order.customer}
              </td>


              <td className="border p-2">
                {order.neighbourhood}
              </td>


              <td className="border p-2">
                ETB {order.total}
              </td>


              <td className="border p-2">
                {order.date}
              </td>


            </tr>

          ))}

        </tbody>


      </table>



      <div className="mt-6 flex gap-4">

        {page > 1 && (

          <Link
            href={`/orders?page=${page - 1}&sort=${sort}`}
          >
            Previous
          </Link>

        )}



        <span>
          Page {page} of {totalPages}
        </span>



        {page < totalPages && (

          <Link
            href={`/orders?page=${page + 1}&sort=${sort}`}
          >
            Next
          </Link>

        )}

      </div>


    </>
  );
}