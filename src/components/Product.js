

import { useState, useEffect,location} from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import ProductCatalogApi from '../services/api.js';
import styles from '../css/Product.module.css';
import { v4 as uuidv4 } from 'uuid';


const TOKEN = process.env.API_KEY

function Product() {
  const [productState, setProductState] = useState(null);
  const [imagesState, setImagesState] = useState({
    images:[],
    colorActive:false
  })

  const location = useLocation();

  const {id} = location.state


  useEffect(() => {
    // Fetch product on component mount
    async function fetchProduct() {
      if (id) {
        try {
          const product = await ProductCatalogApi.getProduct(id);
          setProductState(product);
          setImagesState({
            images: product.images || [], // Initialize with product images
            colorActive: false
          });
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    }

    fetchProduct();
  }, [id]);

  function updateImageState(event) {
    const clickedElement = event.currentTarget;
    const dataUrl = clickedElement.dataset.url;
    const dataName = clickedElement.dataset.name;

    setImagesState(prevState => {
      const filteredImages = productState.images.filter(
        image => image.color === dataName
      );

      // Add the clicked image (dataUrl) as the first image
      return {
        images: [{ image_url: dataUrl }, ...filteredImages],
        colorActive: dataName
      };
    });
  }

  function returnToAllImages(){
    setImagesState(
      {
        images:productState.images,
        colorActive:false
      }
    )
  }
  console.log(imagesState)



  return (
    <div>
      {productState ?
        <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <ImageCarousel imagesProp={imagesState} returnToAllImages={returnToAllImages}/>
          </div>
          <div className={styles.productInfo}>
            <h1>{productState.name}</h1>
          <div className={styles.descriptionContainer}>
            <h6>Description</h6>
            <p>{productState.description}</p>
          </div>
          <div className={styles.colorContainer}>
            <h6>Colors</h6>
            {productState.colors.map(color =>
            <div key={uuidv4()}>
              <p>{color.name}</p>
              <img className={styles.colorImage}
                    src={color.image_url}
                    data-name={color.name}
                    data-url={color.image_url}
                    onClick={updateImageState}
                    >
              </img>
              </div>)}
          </div>
          <div className={styles.textureContainer}>
            <h6>Textures</h6>
              {productState.textures.map(texture=>
                <div key={uuidv4()} className={styles.textureContainer}>
                  <p key={uuidv4()}>{texture.name}</p>
                  <img key={uuidv4()}>{texture.image_url}</img>
                </div>)}
          </div>
          <div className={styles.sizesContainer}>
            <h6>Sizes</h6>
            {productState.sizes.map(size =>
              <div key={uuidv4()} className={styles.sizeContainer}>
              <b key={uuidv4()}>{size.name}</b>
              {size.dimensions.map(d => <p key={uuidv4()}>{d}</p>)}
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