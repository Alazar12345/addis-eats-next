import { menu } from "@/app/data/mockData";

export default function sitemap() {
  const baseUrl = "http://localhost:3000";

  const dishPages = menu.map((dish) => ({
    url: `${baseUrl}/dishes/${dish.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/signin`,
      lastModified: new Date(),
    },
    ...dishPages,
  ];
}