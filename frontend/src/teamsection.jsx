import React from "react";
import "./teamsection.css";

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="background-overlay"></div> {/* Transparent Background Layer */}
      <h2 className="stats-heading">
        More than <span className="highlight">20,000</span> clients trust us with all their back-office needs. <br />
        This gives them more time to focus on the future of their business.
      </h2>
      <div className="stats-cards">
        <div className="stats-card">
          <h3>177</h3>
          <p>Digital global audience reach</p>
        </div>
        <div className="stats-card">
          <h3>77</h3>
          <p>of the audience is under 34 years old</p>
        </div>
        <div className="stats-card">
          <h3>5777</h3>
          <p>content pieces produced every day</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
