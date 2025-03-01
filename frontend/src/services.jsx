import React from "react";
import "./Services.css";
import { FaHospital, FaCogs, FaUniversity, FaBullhorn, FaShoppingCart, FaLaptopCode, FaFilm, FaPlane, FaTruck } from "react-icons/fa";

const services = [
  { icon: <FaHospital />, title: "Healthcare" },
  { icon: <FaCogs />, title: "Product Companies" },
  { icon: <FaUniversity />, title: "Banking and Finance" },
  { icon: <FaBullhorn />, title: "Digital and Marketing Agencies" },
  { icon: <FaShoppingCart />, title: "Retail and E-Commerce" },
  { icon: <FaLaptopCode />, title: "Education and E-Learning" },
  { icon: <FaFilm />, title: "Media and Entertainment" },
  { icon: <FaPlane />, title: "Travel and Hospitality" },
  { icon: <FaTruck />, title: "Logistics" },
];
const serviceClasses = [
    "healthcare",
    "product",
    "finance",
    "marketing",
    "ecommerce",
    "education",
    "media",
    "travel",
    "logistics",
  ];

const Services = () => {
  return (
    <div className="service--container">
      <h2 className="service--title">INDUSTRIES WE CATER TO</h2>
      <div className="service--content">
        <div className="service--grid">
          {services.map((service, index) => (
            <div className={`service--card ${serviceClasses[index]}`} key={index}>
              <div className="service--icon">{service.icon}</div>
              <h3 className="service--title">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="service--description">
          <span className="quote">“</span>
          <p>
            We at 7Shouters cater to several industries, providing them with
            the right solutions. We have helped numerous startups with building
            their product and technology stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
