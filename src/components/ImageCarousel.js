import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ProductCatalogApi from '../../services/api';
require('dotenv').config();


const TOKEN = process.env.API_KEY

function ImageCarousel({productId}) {
  const [productState, setProductState] = useState(null)
  const [imageState, setImageState] = useState(null)

  useEffect(() => {
    //fetch product
    async function fetchProduct() {
      const product = ProductCatalogApi.getProduct(TOKEN, productId)
      setProductState(productState=product)
    }
    fetchProduct();
  });


  return (
    <div className="App">
      <h1>{productState.name}</h1>
      <p>{productState.description}</p>
      <div className='product-images'>


      </div>

    </div>
  );
}

export default ImageCarousel;