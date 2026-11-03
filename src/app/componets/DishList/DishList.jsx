import DishCard from "../DishCard/DishCard";
import "./DishList.css";

export default function DishList({ dishes }) {
  return (
    <section className="dish-list">
      {dishes.map((dish) => (
        <DishCard 
          key={dish.id} 
          dish={dish} 
        />
      ))}
    </section>
  );
}