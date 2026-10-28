import { ImageResponse } from "next/og";
import dishes from "@/app/data/mockData";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { id } = await params;

  const dish = dishes.find(
    (item) => item.id.toString() === id
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          fontSize: 70,
          fontWeight: "bold",
        }}
      >
        {dish ? dish.name : "Addis Eats"}
      </div>
    ),
    {
      ...size,
    }
  );
}