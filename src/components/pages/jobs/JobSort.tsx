"use client";
import React, { useState } from "react";

const JobSort = () => {
  const [sortOption, setSortOption] = useState("SortBy Newest");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  return (
    <>
      <select
        id="sort-select"
        className="form-select"
        value={sortOption}
        onChange={handleSortChange}
        style={{
          outline: "none",
          boxShadow: "none",
        }}
      >
        <option value="SortBy Newest">SortBy Newest</option>
        <option value="SortBy Oldest">SortBy Oldest</option>
        <option value="SortBy Popular">SortBy Popular</option>
        <option value="SortBy Trending">SortBy Trending</option>
      </select>
    </>
  );
};

export default JobSort;
