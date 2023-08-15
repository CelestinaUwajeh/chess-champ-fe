"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { Input } from "@/components/ui/input";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center text-[#010101] text-opacity-60 border-input border border-solid px-6 py-3 rounded-[10px]">
      <FiSearch className="h-[35px] w-auto" />
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-none text-xl"
      />
    </div>
  );
};

export default Search;
