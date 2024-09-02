import logo from './logo.svg';
import './App.css';
import ProductCatalogApi from '../../services/api';
import Filter from './Filter';
import ProductPreviewItem from './ProductPreviewItem';
import { useEffect, useState } from 'react';
require('dotenv').config();
import { v4 as uuidv4 } from 'uuid';

const TOKEN = process.env.API_KEY

function Products() {
  const [productsCategoryState, setProductsCategoryState] = useState({
    category:null,
    products:null
  })

  useEffect(() => {
    //fetch products
    async function fetchProducts() {
      products = ProductCatalogApi(token, productsCategoryState.category)
      setProductsCategoryState(
        productsCategoryState = {
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
      <div className='products'>
        {productsCategoryState.products.map(p=>
                                              <ProductPreviewItem
                                              key={uuidv4()}
                                              product={p}/>)}
      </div>

    </div>
  );
}

export default Products;