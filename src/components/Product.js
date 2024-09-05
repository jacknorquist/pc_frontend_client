

import { useState, useEffect,location} from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import ProductCatalogApi from '../services/api.js';
import styles from '../css/Product.module.css'


const TOKEN = process.env.API_KEY

function Product() {
  const [productState, setProductState] = useState(null)

  const location = useLocation();

  const {id} = location.state

  console.log(id, 'idddd')

  useEffect(() => {
    // Fetch product on component mount
    async function fetchProduct() {
      if (id) {
        try {
          const product = await ProductCatalogApi.getProduct(id); // Ensure correct API usage
          setProductState(product); // Set product data to state
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    }

    fetchProduct();
  }, [id]);
  console.log(productState)


  return (
    <div>
      {productState ?
        <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <ImageCarousel images={productState.images}/>
          </div>
          <div className={styles.productInfo}>
            <h1>{productState.name}</h1>
          <div className={styles.descriptionContainer}>
            <h6>Description</h6>
            <p>{productState.description}</p>
          </div>
          <div className='colorsContainer'>
            {productState.colors.map(color => <img className={styles.colorImage} src={color.image_url}></img>)}
          </div>
          <div className='texturesContainer'>
          </div>
          <div className={styles.sizesContainer}>
            <h6>Sizes</h6>
            {productState.sizes.map(size =>
              <div className={styles.sizeContainer}>
              <b>{size.name}</b>
              {size.dimensions.map(d => <p>{d}</p>)}
              </div>
            )}
          </div>
          <div className='specContainer'>
            <a href={`${productState.spec_sheet}`}>
              <div className='specSheetContainer'>Spec Sheet</div>
            </a>
            </div>
          </div>
      </div>
      : null

      }




    </div>

  );
}

export default Product;