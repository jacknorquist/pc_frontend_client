import { useState } from "react";

function Filter({ changeCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (category) => () => {
    setSelectedCategory(category);
    changeCategory(category);
  };

  return (
    <div className="filter-container">
      <ul>
        <li>
          <input
            type="radio"
            id="paversSlabs"
            name="category"
            checked={selectedCategory === 'Pavers & Slabs'}
            onChange={handleChange('Pavers & Slabs')}
          />
          <label htmlFor="paversSlabs">Pavers & Slabs</label>
        </li>
        <li>
          <input
            type="radio"
            id="permeablePavements"
            name="category"
            checked={selectedCategory === 'Permeable Pavements'}
            onChange={handleChange('Permeable Pavements')}
          />
          <label htmlFor="permeablePavements">Permeable Pavements</label>
        </li>
        <li>
          <input
            type="radio"
            id="walls"
            name="category"
            checked={selectedCategory === 'Walls'}
            onChange={handleChange('Walls')}
          />
          <label htmlFor="walls">Walls</label>
        </li>
        <li>
          <input
            type="radio"
            id="steps"
            name="category"
            checked={selectedCategory === 'Steps'}
            onChange={handleChange('Steps')}
          />
          <label htmlFor="steps">Steps</label>
        </li>
        <li>
          <input
            type="radio"
            id="edgers"
            name="category"
            checked={selectedCategory === 'Edgers'}
            onChange={handleChange('Edgers')}
          />
          <label htmlFor="edgers">Edgers</label>
        </li>
        <li>
          <input
            type="radio"
            id="caps"
            name="category"
            checked={selectedCategory === 'Caps'}
            onChange={handleChange('Caps')}
          />
          <label htmlFor="caps">Caps</label>
        </li>
        <li>
          <input
            type="radio"
            id="accessories"
            name="category"
            checked={selectedCategory === 'Accessories'}
            onChange={handleChange('Accessories')}
          />
          <label htmlFor="accessories">Accessories</label>
        </li>
      </ul>
    </div>
  );
}

export default Filter;