import "./AboutCenter.css";

import React from "react";
import poster from "../assets/poster.png"

const AboutCenter = () => {
  return (
    <div className="main">
      <div className="leftabout">
        <h1>Uncover Kerala</h1>
        <p>
          Come along on Dakshin 2.0, a magical journey through Kerala.
          We'll take in the breathtaking views of Munnar, explore through
          the peaceful backwaters of Alleppey, relax on the beautiful
          beaches of Varkala, and soak up the vibrant culture of Trivandrum.
          This trip promises unforgettable memories, stunning scenery,
          and a deep dive into the heart of Kerala's natural beauty and rich heritage.
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
