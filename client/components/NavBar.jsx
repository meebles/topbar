import React from 'react';

const NavBar = () => (
  <div className="t_nav-wrapper">
    <div className="t_nav-container">
      <div className="t_IKEA-logo-container">
        <img src="https://team-meat-searchbar-images.s3.us-east-2.amazonaws.com/logo.png" alt="" />
      </div>
      <div className="t_nav-links-container">
        <div className="t_nav-links-list-wrapper">
          <ul className="t_nav-links-list">
            <li>Offers</li>
            <li>Products</li>
            <li>Rooms</li>
            <li>Ideas & Inspiration</li>
            <li>New at IKEA</li>
          </ul>
        </div>
      </div>
      <div className="t_mini-links-container">
        <ul className="t_mini-links-list">
          <li className="t_mini-link">t</li>
          <li className="t_mini-link">t</li>
          <li className="t_mini-link">t</li>
        </ul>
      </div>
    </div>
  </div>
);

export default NavBar;
