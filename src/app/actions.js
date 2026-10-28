"use server";

import { getSession } from "@/app/lib/auth";
import { orderSchema } from "@/app/lib/schema";
import { revalidatePath } from "next/cache";
import { addOrder } from "@/app/data/orders";

export async function placeOrder(previousState, formData) {
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

 

  revalidatePath("/checkout");

  return {
    success: true,
    message: "Order placed successfully",
  };
}

export async function cancelOrder(orderId) {
  const session = await getSession();

  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  // check order owner here

  return {
    success: true,
  };
}