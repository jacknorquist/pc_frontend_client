import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ProductCatalogApi from '../../services/api';
import ImageCarousel from './ImageCarousel'
require('dotenv').config();


const TOKEN = process.env.API_KEY

function Product({productId}) {
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
    <div className="productContainer">
      <h1>{productState.name}</h1>
      <p>{productState.description}</p>
      <div className='productImages'>
        <ImageCarousel images={productState.images}/>
      </div>
      <div className='descriptionContainer'>
        <h6>Description</h6>
        <p>{productState.description}</p>
      </div>
      <div className='colorsContainer'>

      </div>
      <div className='texturesContainer'>

      </div>
      <div className='sizesContainer'>

      </div>
      <div className='specContainer'>
        <a href={`${productState.spec_sheet}`}>
          <div className='specSheetContainer'>Spec Sheet</div>
        </a>
      </div>

    </div>
  );
}

export default Product;