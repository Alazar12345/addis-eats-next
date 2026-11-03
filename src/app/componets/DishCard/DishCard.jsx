"use client";

import "./DishCard.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useCartStore from "@/app/store/cartStore";

function DishCard({ dish }) {
  const router = useRouter();

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div
      className="dish-card"
      onClick={() => router.push(`/dishes/${dish.id}`)}
    >

      {/* Image Section */}
      <div className="dish-image">

        <Image
          src={dish.image}
          alt={dish.name}
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, 400px"
        />


        <button
          className="favorite"
          onClick={(e) => e.stopPropagation()}
        >
          ♡
        </button>

      </div>


      {/* Content Section */}
      <div className="dish-info">

        <h2>{dish.name}</h2>


        <p>
          {dish.description}
        </p>


        <div className="dish-price">
          {dish.price} ETB
        </div>


        <button
          className="add-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(dish);
          }}
        >
          Add to Cart
        </button>


      </div>

    </div>
  );
}

export default DishCard;