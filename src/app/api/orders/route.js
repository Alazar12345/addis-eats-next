import { orderSchema } from "@/lib/schema";

export async function POST(request) {
  const body = await request.json();

  const result = orderSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        fieldErrors: result.error.flatten().fieldErrors,
      },
      {
        status: 422,
      }
    );
  }

  return Response.json(
    {
      message: "Order created successfully",
      order: result.data,
    },
    {
      status: 201,
    }
  );
}