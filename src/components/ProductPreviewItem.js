
import { Link } from "react-router-dom";
import styles from '../css/ProductPreviewItem.module.css'

function ProductPreviewItem({product}) {
  console.log(product)

  return (
    <div className={styles.productPreviewItem}data-id={product.id}>
      <Link to={`/products/${product.name}`} state={{id : product.id}}>
        <img src={product.images[0].image_url} className={styles.mainImage}/>
        <p className='product-name'>{product.name}</p>
        <p><i>{product.normalized_category_name}</i></p>
        <ul className={styles.colorsPreview}>
          {product.colors.map(color =>
                               <li className={styles.colorPreview}>
                                <img className={styles.colorPreviewImg}src={color.image_url} />
                               </li>)}
        </ul>
      </Link>
    </div>
  );
}

export default ProductPreviewItem;