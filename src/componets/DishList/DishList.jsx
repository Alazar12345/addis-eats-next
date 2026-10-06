import DishCard from "../DishCard/DishCard";

export default function DishList({ dishes }) {
  return (
    <section>
      {dishes.map((dish) => (
        <DishCard 
          key={dish.id} 
          dish={dish} 
        />
      ))}
    </section>
  );
}