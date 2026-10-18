"use client";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function OrderStatus({ id, initialOrder }) {
  const { data: order, error, isLoading } = useSWR(
    `/api/orders/${id}`,
    fetcher,
    {
      fallbackData: initialOrder,
      refreshInterval: 5000,
    }
  );

  if (error) {
    return <p>Failed to load order.</p>;
  }

  if (isLoading && !order) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>Order Status</h1>

      <p>
        <strong>Order ID:</strong> {order.id}
      </p>

      <p>
        <strong>Status:</strong> {order.status}
      </p>
    </main>
  );
}