
import ProductCatalogApi from '../services/api';

import Filter from './Filter';
import ProductPreviewItem from './ProductPreviewItem';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TOKEN = process.env.API_KEY

function Products() {
  const [productsCategoryState, setProductsCategoryState] = useState({
    category:null,
    products:null
  })

  console.log(productsCategoryState.products)

  useEffect(() => {
    //fetch products
    async function fetchProducts() {
      const products = await ProductCatalogApi.getProducts(TOKEN, productsCategoryState.category)
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
    <div className="products-page">
      <Filter changeCategory={changeCategory}/>
      {productsCategoryState.products ?
        <div className='products'>
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