import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faCog } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css"; // Importing the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo with Image */}
        <a href="/" className="logo">
        <img src="/image.png" alt="7Shouters Logo" className="logo-img"/>
        </a>


        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {["Home", "Services", "About Us", "Contact Us", "News & Insights"].map(
            (item, index) => (
              <li key={index} className="nav-item">
                <a href={`#${item.toLowerCase().replace(/\s/g, "")}`} className="nav-link">
                  {item}
                </a>
                <div className="hover-line"></div>
              </li>
            )
          )}
        </ul>

        {/* Settings & Dark Mode Toggle */}
        <div className="settings">
        <div className="hover-line"></div>
          {/* Settings Icon */}
          <button onClick={() => setSettingsOpen(!settingsOpen)} className="settings-btn">
            <FontAwesomeIcon icon={faCog} className="icon settings-icon" />
          </button>

          {/* Dropdown for Dark Mode Toggle */}
          {settingsOpen && (
            <div className="settings-dropdown">
              <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
                {darkMode ? (
                  <FontAwesomeIcon icon={faSun} className="icon sun" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} className="icon moon" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
