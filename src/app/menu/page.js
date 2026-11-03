import { menu } from "@/app/data/mockData";
import DishList from "@/app/componets/DishList/DishList";
import FilterShell from "@/app/componets/FilterShell/FilterShell";
import "./menu.css";

export const metadata = {
  title: "Menu",
  description:
    "Browse authentic Ethiopian dishes available from Addis Eats.",
};

export default async function MenuPage({ searchParams }) {
  const params = await searchParams;

  const page = params?.page || 1;

  return (
    <main className="menu-page">
      <h1>Our Menu</h1>

      <p className="page-number">Page: {page}</p>

      <FilterShell>
        <DishList dishes={menu} />
      </FilterShell>
    </main>
  );
}