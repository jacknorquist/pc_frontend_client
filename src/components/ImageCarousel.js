import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
require('dotenv').config();


const TOKEN = process.env.API_KEY

function ImageCarousel({images}) {
  const [imageState, setImageState] = useState({images:images, index:0, colorImage:null})



  return (
    <div className="image-carousel">
        <img src={images[imageState.index]}></img>
        <div className='image-thumbnails'>
          
        {imageState.colorImage ? imageState.images.map((image, index)=>{
          if(image?.color === imageState.colorImage && index !=imagesState.index){
            return <img
                        key={image.image_url}
                        className='image-thumbnail'
                        src={image.image_url}
                        />
          }
          return null
        })
        :
        {imageState.images.map((image, index) => {
          if (index !== imageState.index) {
            return <img
                        key={index}
                        className='image-thumbnail'
                        src={image} alt={`Thumbnail ${index}`} />;
          }
          return null; // Return null if the condition is not met
        })}
        }

        </div>
    </div>


  );
}

export default ImageCarousel;