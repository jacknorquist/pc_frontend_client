
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TOKEN = process.env.API_KEY

function ImageCarousel({images}) {
  const [imageState, setImageState] = useState({images:images, index:0, colorImage:null})

  function updateImageIndex(event){
    setImageState(
      imageState.images = imageState.images,
      imageState.index = event.key,
      imageState.colorImage = imageState.colorImage
    )
  }

  function returnToAllImages(){
    setImageState(
      imageState.images = imageState.images,
      imageState.index = 0,
      imageState.colorImage = null
    )
  }



  //if images state signals that a color has been clicked, show images connected
  //to the color, else display all images
  return (
    <div className="image-carousel">
      <div className='main-image'>
        <img src={imageState.images[imageState.index].image_url}/>
      </div>
      <div className='image-thumbnails'>
        {imageState.colorImage ? imageState.images.map((image, index)=>{
          if(image?.color === imageState.colorImage && index !=imageState.index){
            return <img
                        key={uuidv4()}
                        className='image-thumbnail'
                        src={image.image_url}
                        onClick={updateImageIndex}
                        />
          }
          return null
        })
        :
        imageState.images.map((image, index) => {
          if (index !== imageState.index) {
            return <img
                        key={uuidv4()}
                        className='image-thumbnail'
                        src={image} alt={`Thumbnail ${index}`}
                        onClick={updateImageIndex}
                        />
          }
          return null; // Return null if the condition is not met
        })
        }
        {imageState.colorImage ?
        <div className='show-all-image-btn'
              onClick={returnToAllImages}>
             Show All Images
        </div>
          :""}

        </div>

    </div>


  );
}

export default ImageCarousel;