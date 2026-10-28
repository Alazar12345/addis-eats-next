"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <main className="p-6">

      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-3">
        We could not load orders right now.
      </p>


      <button
        className="mt-5 border px-4 py-2"
        onClick={() => reset()}
      >
        Try Again
      </button>

    </main>
  );
}