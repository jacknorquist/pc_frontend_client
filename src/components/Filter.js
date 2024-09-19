import {filterCategories} from "../services/categoryReferences";
import styles from '../css/Filter.module.css';

function Filter() {


  return (
    <div className={styles.filterContainer}>
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