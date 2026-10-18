import { menu } from "@/data/mockData";

export async function GET() {
  return Response.json(menu);
}