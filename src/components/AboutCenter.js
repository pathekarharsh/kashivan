import "./AboutCenter.css";

import React from "react";
import poster from "../assets/poster.jpg"

const AboutCenter = () => {
  return (
    <div className="main">
      <div className="leftabout">
        <h1>Uncover U.P.</h1>
        <p>
          Join us for a week-long trip to Uttar Pradesh,
          visiting Agra, Mathura, Vrindavan, and Varanasi.
          Discover inner peace, connect with new people,
          and explore the rich culture of these cities.
          Get ready for an unforgettable journey filled with
          learning and exploration
        </p>
        <div className="contact-btn">
          <a href="mailto:paryatakin@gmail.com" className="btn">
            CONTACT
          </a>
        </div>
      </div>
      <div className="rightabout">
        <div className="img-container">
            <img src={poster} alt="poster" className="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
