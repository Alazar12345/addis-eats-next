export default async function DishPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Dish Details</h1>
      <p>Dish ID: {id}</p>
    </div>
  );
}