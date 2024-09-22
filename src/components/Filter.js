import {filterCategories} from "../services/categoryReferences";
import styles from '../css/Filter.module.css';
import { v4 as uuidv4 } from 'uuid';

function Filter() {


  return (
    <div className={styles.filterContainer}>
      <ul>
        {filterCategories.map((category) => (
          <a key={uuidv4()} href={category.url} className="category-link">
          <li key={uuidv4()}>
              {category.name}
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Filter;