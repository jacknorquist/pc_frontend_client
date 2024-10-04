
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../css/ImageCarousel.module.css'

const TOKEN = process.env.API_KEY

function ImageCarousel({imagesProp, returnToAllImages}) {
  const [imagesState, setImageState] = useState({images:imagesProp.images, index:2, imagesCut:imagesProp.images.slice(0,4), colorActive:imagesProp.colorActive})

  function updateImageIndex(event){
    const newIndex = event.target.dataset.id

    if(newIndex<=1){
      setImageState(prevState => ({
        ...prevState,
        index: Number(newIndex), // Ensure the index is a number
        imagesCut: prevState.images.slice(prevState.images.length, newIndex+2)
      }));
    }
    setImageState(prevState => ({
      ...prevState,
      index: Number(newIndex), // Ensure the index is a number
      imagesCut: prevState.images.slice(newIndex-2, newIndex+2)
    }));
  }

  function decreaseImageIndex(event){
    const newIndex = event.target.dataset.id

    if(newIndex<=1){
      setImageState(prevState => ({
        ...prevState,
        index: Number(newIndex), // Ensure the index is a number
        imagesCut: prevState.images.slice(prevState.images.length, newIndex+2)
      }));
    }
    setImageState(prevState => ({
      ...prevState,
      index: Number(newIndex), // Ensure the index is a number
      imagesCut: prevState.images.slice(newIndex-2, newIndex+2)
    }));
  }


  function increaseImageIndex(event){
    const newIndex = ++imagesState.index;
    const lastIndex = imagesState.images.length-1;

    if(newIndex === lastIndex){
      const lastPart = imagesState.images.slice(0,1);
      const firstPart = imagesState.images.slice(newIndex-2, newIndex)
      setImageState(prevState => ({
        ...prevState,
        index: Number(newIndex), // Ensure the index is a number
        imagesCut: [lastPart, firstPart].flat()
      }));
    }else if(newIndex === lastIndex+1){

      const lastPart = imagesState.images.slice(0,2);
      const firstPart = imagesState.images.slice(newIndex-1, newIndex)
      setImageState(prevState => ({
        ...prevState,
        index: Number(newIndex), // Ensure the index is a number
        imagesCut: [firstPart, lastPart].flat()
      }));
    }
    setImageState(prevState => ({
      ...prevState,
      index: newIndex, // Ensure the index is a number
      imagesCut: prevState.images.slice(newIndex-2, newIndex+2)
    }));
  }

  // useEffect(() => {
  //   setImageState({
  //     images: imagesProp.images,
  //     index: 2,
  //     imagesCut: imagesProp.images.slice(0, 4), // Reset index if needed
  //     colorActive: imagesProp.colorActive
  //   });
  // }, [imagesProp]);

  console.log(imagesState.imagesCut)
  console.log(imagesState.index)

  //if images state signals that a color has been clicked, show images connected
  //to the color, else display all images
  return (
    <div className={styles.imageCarousel}>
      <div>
        <img className={styles.mainImage} src={imagesState.images[imagesState.index].image_url}/>
      </div>
      <div className={styles.thumbnailImages}>
      <i className="bi bi-arrow-left" onClick={decreaseImageIndex}></i>
      {imagesState.imagesCut.map((image, index) => (
        <div className={index === 2? styles.thumbnailImageActive : styles.thumbnailImage} key={uuidv4()} data-id={index} onClick={updateImageIndex}>
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
        <i className="bi bi-arrow-right" onClick={increaseImageIndex}></i>
      </div>
    </div>
  );
}

export default ImageCarousel;