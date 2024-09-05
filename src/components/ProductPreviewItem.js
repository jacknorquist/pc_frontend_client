
import { Link } from "react-router-dom";
import styles from '../css/ProductPreviewItem.module.css';
import { v4 as uuidv4 } from 'uuid';

function ProductPreviewItem({product}) {

  const cleanedProductName = product.name.replace(/ /g, '-')

  return (
    <div className={styles.productPreviewItem}data-id={product.id}>
        <img src={product.images[0].image_url} className={styles.mainImage}/>
        <div className={styles.descriptionContainer}>
          <Link to={`/product/${cleanedProductName}`} state={{id : product.id}}>
            <p className='product-name'>{product.name}</p>
          </Link>
          <Link to={`/products/${product.normalized_category_name}`}>
            <p><i>{product.normalized_category_name}</i></p>
          </Link>
        </div>
        <ul className={styles.colorsPreview}>
          {product.colors.map(color =>
                               <li key={uuidv4()} className={styles.colorPreview}>
                                <img className={styles.colorPreviewImg}src={color.image_url} />
                               </li>)}
        </ul>
    </div>
  );
}

export default ProductPreviewItem;