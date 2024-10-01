import { filterCategories } from "../services/categoryReferences";
import { useState } from "react";
import styles from '../css/Filter.module.css';
import { v4 as uuidv4 } from 'uuid';

function Filter() {
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of the active item
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active index on click
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className={styles.filterContainer}>
      <ul className={isMenuOpen ? styles.navlinks : styles.navLinksActive}>
        {filterCategories.map((category, index) => (
          <a key={uuidv4()} href={category.url} className="category-link">
          <li
            key={uuidv4()}
            className={activeIndex === index ? styles.activeCategory : styles.category}
            onClick={() => handleClick(index)} // Set the active index on click
          >
              {category.name}
          </li>
          </a>
        ))}
      </ul>
      <i className='bi bi-list' id={styles.menuIcon} onClick={toggleMenu}></i>
    </div>
  );
}

export default Filter;