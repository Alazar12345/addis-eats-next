"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";


export default function SearchBox({ initialDishes }) {

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);


  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input);
      setPage(1); // reset page when search changes
    }, 500);

    return () => clearTimeout(timer);

  }, [input]);


 const { data } = useSWR(
  search
    ? `/api/dishes?search=${search}`
    : null,
  fetcher,
  {
    fallbackData: initialDishes,
    keepPreviousData: true,
  }
);


  return (
    <section>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search dishes..."
      />


      {isLoading && !data && <p>Loading...</p>}


      {data?.map((dish) => (
        <p key={dish.id}>
          {dish.name}
        </p>
      ))}


      <div>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>


        <span>
          Page {page}
        </span>


        <button
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>


    </section>
  );
}