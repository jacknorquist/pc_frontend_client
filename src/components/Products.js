
import ProductCatalogApi from '../services/api';
import styles from '../css/Products.module.css';
import { useParams } from 'react-router-dom';
import Filter from './Filter';
import ProductPreviewItem from './ProductPreviewItem';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { filterCategories, filterRef } from "../services/categoryReferences";

const TOKEN = process.env.API_KEY

function Products() {
  const category = useParams().category;
  const [productsCategoryState, setProductsCategoryState] = useState({
    category: category,
    products:null
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };
  console.log( isMenuOpen)
  // const [activeIndex, setActiveIndex] = useState(0); // State to keep track of the active item

  // const handleClick = (index) => {
  //   setActiveIndex(index); // Update the active index on click
  // };

  const activeIndex = filterRef[category]


  useEffect(() => {
    //fetch products
    async function fetchProducts() {
      const products = await ProductCatalogApi.getProducts(productsCategoryState.category)
      setProductsCategoryState({
          category:productsCategoryState.category,
          products: products
        }
      )
    }
    fetchProducts();
  }, [productsCategoryState.category]);

  async function changeCategory(category){
    setProductsCategoryState({
      category:category,
      products:productsCategoryState.products
    })
  }


  return (
    <div className={styles.productsPageContainer}>
      <i className='bi bi-list' id={styles.menuIcon} onClick={toggleMenu}></i>
      <div className={styles.filterContainer}>
      <ul className={isMenuOpen ? styles.navLinksActive : styles.navLinks}>
        {filterCategories.map((category, index) => (
          <a key={uuidv4()} href={category.url} className="category-link">
          <li
            key={uuidv4()}
            className={activeIndex === index ? styles.activeCategory : styles.category}
            // onClick={() => handleClick(index)} // Set the active index on click
          >
              {category.name}
          </li>
          </a>
        ))}
      </ul>
    </div>
      {/* <Filter changeCategory={changeCategory}/> */}
      {productsCategoryState.products ?
        <div className={styles.products}>
          {productsCategoryState.products.map(p=>
                                                <ProductPreviewItem
                                                key={uuidv4()}
                                                product={p}/>)}
        </div>
      : null }

    </div>
  );
}

export default Products;