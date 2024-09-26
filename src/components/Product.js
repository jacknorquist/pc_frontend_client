

import { useState, useEffect,location} from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import ProductCatalogApi from '../services/api.js';
import styles from '../css/Product.module.css';
import { v4 as uuidv4 } from 'uuid';
import { categoryLinks } from '../services/categoryReferences.js';


const TOKEN = process.env.API_KEY

function Product() {
  const [productState, setProductState] = useState(null);
  const [imagesState, setImagesState] = useState({
    images:[],
    colorActive:false
  })

  const location = useLocation();

  const {id} = location.state;

  let accentColors =[]
  let nonAccentColors =[]


  useEffect(() => {
    // Fetch product on component mount
    async function fetchProduct() {
      if (id) {
        try {
          const product = await ProductCatalogApi.getProduct(id);
          product['nonAccentColors'] = product.colors.filter(color => !color.accent_color);
          product['accentColors'] = product.colors.filter(color => color.accent_color);
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
  console.log(productState)



  return (
    <div>
      {productState ?
        <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <ImageCarousel imagesProp={imagesState} returnToAllImages={returnToAllImages}/>
          </div>
          <div className={styles.productInfo}>
            <h1>{productState.name}</h1>
            <a href={`${categoryLinks[productState.normalized_category_name]}`} className={styles.productCategory}><i>{productState.normalized_category_name}</i></a>
          <div className={styles.descriptionContainer}>
            <h4>Description</h4>
            <p>{productState.description}</p>
          </div>
          <div className={styles.details}>
            <h4>Colors</h4>
            <div className={styles.colorsContainer}>
              {productState.nonAccentColors.map(color =>
              <div className={styles.colorItem} key={uuidv4()}>
                {color.accent_color? <i>Accent Color</i>: null}
                <img className={styles.colorImage}
                      src={color.image_url}
                      data-name={color.name}
                      data-url={color.image_url}
                      onClick={updateImageState}
                      >
                </img>
                <p className={styles.attrTitle}>{color.name}</p>
                </div>)}
              </div>
              <div className={styles.colorsContainer}>
                {productState.accentColors.map(color =>
              <div className={styles.colorItem} key={uuidv4()}>
                {color.accent_color? <i>Accent Color</i>: null}
                <img className={styles.colorImage}
                      src={color.image_url}
                      data-name={color.name}
                      data-url={color.image_url}
                      onClick={updateImageState}
                      >
                </img>
                <p>{color.name}</p>
                </div>)}
              </div>
          </div>
          <div className={styles.details}>
            <div className={styles.textureContainer}>
              <h4>Textures</h4>
                {productState.textures.map(texture=>
                  <div key={uuidv4()} className={styles.textureContainer}>
                    <p key={uuidv4()}>{texture.name}</p>
                    <img key={uuidv4()}>{texture.image_url}</img>
                  </div>)}
            </div>
          </div>
          <div className={styles.details}>
            <h4>Sizes</h4>
            <div className={styles.sizesContainer}>
              {productState.sizes.map(size =>
                <div key={uuidv4()} className={styles.sizeItem}>
                <b key={uuidv4()}>{size.name}</b>
                {size.image_url? <img src={size.image_url} className={styles.sizeImage}></img>: null}
                {size.dimensions.map(d => <p key={uuidv4()}>{d}</p>)}
                </div>
              )}
            </div>
          </div>
          <div className='specContainer'>
            <h4>Additional Information</h4>
            <a className={styles.pdfContainer} target='blank' href={`${productState.spec_sheet}`}>
              <i className='bi bi-file-pdf'></i>
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