"use client";

import useCartStore from "@/store/cartStore";

export default function AddToCartButton({ dish }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button onClick={() => addToCart(dish)}>
      Add to Cart
    </button>
  );
}