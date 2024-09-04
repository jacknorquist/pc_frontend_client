

import { useState, useEffect, location} from 'react';
import ImageCarousel from './ImageCarousel'
import ProductCatalogApi from '../services/api.js'


const TOKEN = process.env.API_KEY

function Product() {
  const [productState, setProductState] = useState(null)

  const {id} = location.state

  useEffect(() => {
    //fetch product
    async function fetchProduct() {
      const product = ProductCatalogApi.getProduct(TOKEN, id)
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