"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function RevenueChart({
  revenueData,
  ordersData,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Revenue by Neighbourhood
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData}>
            <XAxis dataKey="neighbourhood" />

            <YAxis
              tickFormatter={(value) =>
                `ETB ${value}`
              }
            />

            <Tooltip
              formatter={(value) =>
                `ETB ${value}`
              }
            />

            <Bar
              dataKey="revenue"
            />
          </BarChart>
          <h2 className="text-xl font-bold mt-10 mb-2">
  Orders per Day
</h2>

<p className="text-sm text-gray-600 mb-4">
  Range: Oct 1 – Oct 3 | Unit: Orders
</p>

<div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={ordersData}>
      <XAxis dataKey="date" />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="orders"
      />
    </LineChart>
    <div className="mt-8">
  <h3 className="font-semibold mb-2">
    Orders Data
  </h3>

  <table className="w-full border border-collapse">
    <thead>
      <tr>
        <th className="border p-2">Date</th>
        <th className="border p-2">Orders</th>
      </tr>
    </thead>

    <tbody>
      {ordersData.map((day) => (
        <tr key={day.date}>
          <td className="border p-2">
            {day.date}
          </td>

          <td className="border p-2">
            {day.orders}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  </ResponsiveContainer>
</div>  
        </ResponsiveContainer>
      </div>
    </div>
  );
}