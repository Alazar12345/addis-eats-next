"use server";

import { orderSchema } from "@/lib/schema";
import { revalidatePath } from "next/cache";


export async function placeOrder(formData) {

  const order = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    address: formData.get("address"),
  };


  const result = orderSchema.safeParse(order);


  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }


  // Later this is where you save to database
  console.log("New order:", result.data);


  revalidatePath("/checkout");


  return {
    success: true,
    message: "Order placed successfully",
  };
}

export async function cancelOrder(orderId) {

  const session = {
    userId: 1
  };


  const order = {
    id: orderId,
    userId: 1
  };


  if (!session || session.userId !== order.userId) {
    return {
      error: "Unauthorized"
    };
  }


  console.log("Cancelled order:", orderId);


  return {
    success: true
  };
}