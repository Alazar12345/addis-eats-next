import { menu } from "@/app/data/mockData";

export async function GET() {
  return Response.json(menu);
}
