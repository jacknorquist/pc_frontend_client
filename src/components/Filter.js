import {filterCategories} from "../services/categoryReferences";

function Filter() {


  return (
    <div className="filter-container">
      <ul>
        {filterCategories.map((category) => (
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