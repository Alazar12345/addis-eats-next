import { menu } from "@/data/mockData";
import DishList from "@/componets/DishList/DishList";
import FilterShell from "@/componets/FilterShell/FilterShell";

export default async function MenuPage() {
  return (
    <main>
      <h1>Our Menu</h1>

      <FilterShell>
        <DishList dishes={menu} />
      </FilterShell>
    </main>
  );
}