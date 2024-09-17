import { useState } from "react";

function Filter() {
  const categories = [
    { id: 'paversSlabs', name: 'Pavers & Slabs', url: '/products/pavers-slabs' },
    { id: 'permeablePavements', name: 'Permeable Pavements', url: '/products/permeable-pavements' },
    { id: 'walls', name: 'Walls', url: '/products/walls' },
    { id: 'steps', name: 'Steps', url: '/products/steps' },
    { id: 'edgers', name: 'Edgers', url: '/products/edgers' },
    { id: 'caps', name: 'Caps', url: '/products/caps' },
    { id: 'accessories', name: 'Accessories', url: '/products/accessories' },
  ];

  return (
    <div className="filter-container">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a href={category.url} className="category-link">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;