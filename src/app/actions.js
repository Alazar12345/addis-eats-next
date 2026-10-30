"use server";

import { getSession } from "@/app/lib/session";
import { orderSchema } from "@/app/lib/schema";
import { revalidatePath } from "next/cache";
import { addOrder, getOrders } from "@/app/data/orders";



export async function placeOrder(previousState, formData) {

  // Attack protection: user must be logged in
  const session = await getSession();

  if (!session) {
    return {
      error: "Unauthorized",
    };
  }


  const order = {

    customerId: session.id,

    customer: session.name,

    name: formData.get("name"),

    phone: formData.get("phone"),

    address: formData.get("address"),

  };



  // Server-side validation
  const result = orderSchema.safeParse(order);


  if (!result.success) {

    return {

      fieldErrors:
      result.error.flatten().fieldErrors,

    };

  }



  // Save order
  addOrder({

    id: Date.now().toString(),

    ...result.data,

    status: "pending",

    createdAt: new Date().toISOString(),

  });



  // Refresh pages using order data
  revalidatePath("/checkout");

  revalidatePath("/orders");



  return {

    success: true,

    message: "Order placed successfully",

  };

}





export async function cancelOrder(orderId) {


  // Attack protection: must be logged in
  const session = await getSession();


  if (!session) {

    return {

      error: "Unauthorized",

    };

  }



  const orders = getOrders();


  const order = orders.find(
    (order) => order.id === orderId
  );



  if (!order) {

    return {

      error: "Order not found",

    };

  }



  // Attack protection:
  // user can only cancel their own order

  if (
    order.customerId !== session.id &&
    session.role !== "staff"
  ) {

    return {

      error: "Forbidden",

    };

  }



  order.status = "cancelled";



  revalidatePath("/orders");



  return {

    success: true,

    message: "Order cancelled",

  };

}