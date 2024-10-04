
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../css/ImageCarousel.module.css'

const TOKEN = process.env.API_KEY

function ImageCarousel({imagesProp, returnToAllImages}) {
  const [imagesState, setImageState] = useState({images:imagesProp.images, index:0, colorActive:imagesProp.colorActive})

  function updateImageIndex(event){
    const newIndex = event.target.dataset.id
    setImageState(prevState => ({
      ...prevState,
      index: Number(newIndex) // Ensure the index is a number
    }));
  }

  useEffect(() => {
    setImageState({
      images: imagesProp.images,
      index: 0, // Reset index if needed
      colorActive: imagesProp.colorActive
    });
  }, [imagesProp]);

  //if images state signals that a color has been clicked, show images connected
  //to the color, else display all images
  return (
    <div className={styles.imageCarousel}>
      <div>
        <img className={styles.mainImage} src={imagesState.images[imagesState.index].image_url}/>
      </div>
      <div className={styles.thumbnailImages}>
      {imagesState.images.map((image, index) => (
        <div className={styles.thumbnailImage} key={uuidv4()} data-id={index} onClick={updateImageIndex}>
            <img
              key={uuidv4()}
              data-id={index}
              src={image.image_url}
              alt={`Thumbnail ${index}`} // Add alt text for accessibility
              onClick={updateImageIndex}
          />
          </div>
        ))}
        {imagesState.colorActive ?
        <div className={styles.showAllBtn}
              onClick={returnToAllImages}>
                <p>All Images</p>
        </div>
        :
        null}
      </div>
    </div>
  );
}

export default ImageCarousel;