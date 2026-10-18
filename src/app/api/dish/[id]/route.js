import { menu } from "@/data/mockData";

export async function GET(request, { params }) {
  const { id } = await params;

  const dish = menu.find(
    (item) => item.id === Number(id)
  );

  if (!dish) {
    return Response.json(
      { error: "Dish not found" },
      { status: 404 }
    );
  }

  return Response.json(dish);
}