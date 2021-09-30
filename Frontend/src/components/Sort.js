import React from "react";

function Sort() {
  return (
    <div className="sort">
      <select>
        <option>Sort By</option>
        <option>Price: Low to High </option>
        <option>Price: High to Low </option>
      </select>
    </div>
  );
}

export default Sort;
