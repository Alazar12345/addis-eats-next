export default function Loading() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <table className="w-full border-collapse border">
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index}>
              <td className="border p-4 bg-gray-200 animate-pulse"></td>
              <td className="border p-4 bg-gray-200 animate-pulse"></td>
              <td className="border p-4 bg-gray-200 animate-pulse"></td>
              <td className="border p-4 bg-gray-200 animate-pulse"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}