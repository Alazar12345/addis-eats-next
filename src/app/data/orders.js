const orders = [
  {
    id: 1,
    customer: "Abebe",
    neighbourhood: "Bole",
    total: 650,
    date: "2026-10-20",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Marta",
    neighbourhood: "Kazanchis",
    total: 720,
    date: "2026-10-20",
    status: "Preparing",
  },
  {
    id: 3,
    customer: "Samuel",
    neighbourhood: "Bole",
    total: 280,
    date: "2026-10-21",
    status: "Delivered",
  },
  {
    id: 4,
    customer: "Hana",
    neighbourhood: "Piassa",
    total: 500,
    date: "2026-10-21",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Daniel",
    neighbourhood: "CMC",
    total: 900,
    date: "2026-10-22",
    status: "Delivered",
  },
];

export function addOrder(order) {
  orders.push(order);
}

export function getOrders() {
  return orders;
}

export default orders;