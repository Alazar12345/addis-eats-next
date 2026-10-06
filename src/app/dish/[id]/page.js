import dishes from "@/data/mockData";
import AddToCartButton from "@/componets/AddToCartButton/AddToCartButton";

export default async function DishDetailPage({ params }) {
  const { id } = await params;

  const dish = dishes.find(
    (item) => item.id.toString() === id
  );

  if (!dish) {
    return (
      <div>
        <h1>Dish not found</h1>
      </div>
    );
  }

  return (
    <div>
      <img
        src={dish.image}
        alt={dish.name}
        width="300"
      />

      <h1>{dish.name}</h1>

      <p>
        {dish.description}
      </p>

      <h2>
        {dish.price} ETB
      </h2>

      
    <AddToCartButton dish={dish} />
      
    </div>
  );
}