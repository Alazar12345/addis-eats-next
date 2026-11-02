"use client";

import Link from "next/link";
import useCartStore from "@/app/store/cartStore";
import css from "./Header.css"

export default function Header() {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="header">
      <Link href="/signout">Sign Out</Link>

      <div className="logo">
        <h1>Mesob House</h1>
        <p>Habesha Restaurant</p>
      </div>

      <div className="nav">
        <Link href="/menu">Menu</Link>

        <Link href="/Cart">
          Cart ({cart.length})
        </Link>
      </div>
    </header>
  );
}