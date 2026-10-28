"use client";

import Link from "next/link";
import useCartStore from "@/app/store/cartStore";

export default function Header() {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="header">
      <Link href="/signout">Sign Out</Link>

      <div className="logo">
        <h1>Mesob House</h1>
        <p>Habesha Restaurant</p>
      </div>

      <nav className="navbar">
        <Link href="/menu">Menu</Link>

        <Link href="/cart">
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
}