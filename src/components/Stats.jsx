import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding Some Items in Packing List 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have Everything Packed ✈"
          : `💼You have ${numItems} items on List , and you already packed
        ${numPacked} item (${percentage}%)`}
      </em>
    </footer>
  );
}
