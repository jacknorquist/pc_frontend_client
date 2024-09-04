
import { Link } from "react-router-dom";

function ProductPreviewItem({product}) {

  return (
    <div className="product-preview-item" data-id={product.id}>
      <Link to={`/products/${product.name}`} state={{id : product.id}}>
        <img src={product.main_images[0]} />
        <p className='product-name'>{product.name}</p>
        <p><i>{product.normalized_category_name}</i></p>
        <ul className='colors-preview'>
          {product.colors.map(color =>
                               <li className='color-preview'>
                                <img src={color.image_url} />
                               </li>)}
        </ul>
      </Link>
    </div>
  );
}

export default ProductPreviewItem;