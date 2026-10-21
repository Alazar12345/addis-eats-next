"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-6">
      <h2 className="text-red-600 text-2xl font-bold">
        Something went wrong.
      </h2>

      <p className="my-4">{error.message}</p>

      <button
        onClick={reset}
        className="px-4 py-2 border rounded"
      >
        Try Again
      </button>
    </div>
  );
}