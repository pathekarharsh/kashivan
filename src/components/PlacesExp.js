import React from 'react';
import './PlacesExp.css'

import Image1 from "../assets/one.jpg"
import Image2 from "../assets/two.jpeg";
import Image3 from "../assets/three.jpg";
import Image4 from "../assets/four.jpg";
import Image5 from "../assets/five.jpg";
import Image6 from "../assets/six.jpg";
import Image7 from "../assets/seven.jpg";
import Image8 from "../assets/eight.jpg";

const PlacesExp = () => {
    const images = [
        Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
    
      return (
        <div className="explore-places">
          <h1 className='exp-head'>Places to Explore</h1>
          <div className="image-grid">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Place ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    };

export default PlacesExp