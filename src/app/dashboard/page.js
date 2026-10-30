import RevenueChart from "./RevenueChart";
import orders from "../data/orders";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";


export default async function DashboardPage() {

  const session = await getSession();


  if (!session) {
    redirect("/signin");
  }


  if (session.role !== "staff") {
    redirect("/");
  }



  const revenueByNeighbourhood = Object.values(
    orders.reduce((acc, order) => {

      if (!acc[order.neighbourhood]) {
        acc[order.neighbourhood] = {
          neighbourhood: order.neighbourhood,
          revenue: 0,
        };
      }

      acc[order.neighbourhood].revenue += order.total;

      return acc;

    }, {})
  );



  const ordersPerDay = Object.values(
    orders.reduce((acc, order) => {

      if (!acc[order.date]) {
        acc[order.date] = {
          date: order.date,
          orders: 0,
        };
      }

      acc[order.date].orders += 1;

      return acc;

    }, {})
  );



  return (
    <main className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>


      <RevenueChart
        revenueData={revenueByNeighbourhood}
        ordersData={ordersPerDay}
      />

    </main>
  );
}