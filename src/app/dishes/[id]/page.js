import dishes from "@/app/data/mockData";
import AddToCartButton from "@/app/componets/AddToCartButton/AddToCartButton";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const dish = dishes.find(
    (item) => item.id.toString() === id
  );
  
if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested dish could not be found.",
    };
  }
  return {
    title: dish.name,
    description: dish.description,
  };
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id.toString() === id);

  if (!dish) {
    return (
      <div>
        <h1>Dish not found</h1>
      </div>
    );
  }

  return (
    <div>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MenuItem",
          name: dish.name,
          description: dish.description,
          offers: {
            "@type": "Offer",
            price: dish.price,
            priceCurrency: "ETB",
          },
        }),
      }}
    />
      <Image
  src={dish.image}
  alt={dish.name}
  width={600}
  height={450}
  sizes="(max-width: 768px) 100vw, 600px"
/>

      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <h2>{dish.price} ETB</h2>

      <AddToCartButton dish={dish} />
    </div>
  );
}
