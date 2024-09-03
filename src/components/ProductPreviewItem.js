import './App.css';
import { Link } from "react-router-dom";
import ProductCatalogApi from '../../services/api';

function ProductPreviewItem({product}) {
  return (
    <div className="product-preview-item">
      <Link to={`/products/${product.name}`} productId={product.id}>
        <img src={product.main_images[0]}></img>
        <p className='product-name'>{product.name}</p>
        <p><i>{product.normalized_category_name}</i></p>
        <ul className='colors-preview'>
          {product.colors.map(color =>
                               <li className='color-preview'>
                                <img src={color.image_url}></img>
                               </li>)}
        </ul>
      </Link>
    </div>
  );
}

export default ProductPreviewItem;