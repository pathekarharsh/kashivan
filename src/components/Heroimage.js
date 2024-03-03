import React, { useState, useEffect } from 'react';
import "./Heroimage.css";

import image1 from '../assets/prem.jpg';
import image2 from '../assets/taj.jpg';
import image3 from '../assets/ganga.jpg';
import image4 from '../assets/banaras.jpg';

const Heroimage = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
  ];
  const intervalTime = 3000; // Interval time in milliseconds

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(slider);
  }, [index, images.length, intervalTime]);

  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={images[index]} // Using imported images directly
          alt="home-background"
        />
      </div>
      <div className="content">
        <p>
          Uttar Pradesh <i>Trail</i>
        </p>
        <h1>KASHIVAN</h1>
        <p className="h5">11 June - 17 June 2024</p>
        <div>
          <a
            href="https://drive.google.com/file/d/1fITQvxe9vvKBJqlm1cHCh-VhvFzhpl3T/view"
            className="btn"
          >
            ITINERARY
          </a>
          <a href="https://forms.gle/Kj7WyFhaGBbRvtyCA" className="btn-light">
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
