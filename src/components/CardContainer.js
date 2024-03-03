import React from "react";
import { FaMoneyBillAlt, FaBed, FaTrain, FaCalendar } from "react-icons/fa";
import "./CardContainer.css"; // Import your CSS file

const CardContainer = () => {
  const cards = [
    {
      icon: <FaMoneyBillAlt size={50} style={{ color: "#fff" }} />,
      heading: "Money",
      description: "9,000 Rs",
    },
    {
      icon: <FaBed size={50} style={{ color: "#fff" }} />,
      heading: "Dorms",
      description: "AC Hotels",
    },
    {
      icon: <FaTrain size={50} style={{ color: "#fff" }} />,
      heading: "Train",
      description: "SL",
    },
    {
      icon: <FaCalendar size={50} style={{ color: "#fff" }} />,
      heading: "Calendar",
      description: "7 D 6 N",
    },
  ];

  return (
      <div className='last_one'>
          <div className='a'>
      <a href="https://forms.gle/1wptJLuqz9CwyGGs8" className="btn">
        REGISTER
              </a>
              </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <span className="icon">{card.icon}</span>
            <h3>{card.heading}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
