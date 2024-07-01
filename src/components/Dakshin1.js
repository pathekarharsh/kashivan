import React from "react";
import "./Dakshin1.css";

export const Dakshin1 = () => {
  return (
    <div className="landing-page">
      <div className="left-section">
        <h1>Highlights of Dakshin Trip</h1>
        <p>
          On the right side, you can watch the documentary of our previous
          Dakshin trip, where we explored the vibrant city of Coimbatore, the
          scenic beauty of Kollam, the serene beaches of Varkala, the cultural
          richness of Trivandrum, and the spiritual ambiance of Rameswaram. This
          documentary provides a glimpse of what to expect on our upcoming
          journey through Kerala. Check it out to see the incredible experiences
          that await you.
        </p>
      </div>
      <div className="right-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PtckMNp5XgA?si=h8pPG_fCy3Ryfaqj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
