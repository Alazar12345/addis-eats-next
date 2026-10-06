"use client";

import { useState } from "react";

export default function FilterShell({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {children}
    </div>
  );
}