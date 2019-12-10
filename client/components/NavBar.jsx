import React from 'react';

const NavBar = () => (
  <div className="t_nav-wrapper">
    <div className="t_nav-container">
      <div className="t_logo-container">
        <img src="https://team-meat-searchbar-images.s3.us-east-2.amazonaws.com/logo.png" alt="" />
      </div>
      <div className="t_nav-links-container">
        <div className="t_nav-links-list-wrapper">
          <ul className="t_nav-links-list">
            <li>Offers</li>
            <li className="t_nav-link-with-arrow">
              Products
              <svg className="t_arrow-after-item" viewBox="0 0 24 24">
                <path d="M 19.71 9.29 L 18.29 7.88 L 12 14.17 L 5.7 7.88 L 4.29 9.3 L 12 17 Z" />
              </svg>
            </li>
            <li className="t_nav-link-with-arrow">
              Rooms
              <svg className="t_arrow-after-item" viewBox="0 0 24 24">
                <path d="M 19.71 9.29 L 18.29 7.88 L 12 14.17 L 5.7 7.88 L 4.29 9.3 L 12 17 Z" />
              </svg>
            </li>
            <li>Ideas & Inspiration</li>
            <li>New at IKEA</li>
          </ul>
        </div>
      </div>
      <div className="t_mini-links-container">
        <ul className="t_mini-links-list">
          <li className="t_mini-link">
            <svg>
              <path d="M15,12H9a5,5,0,0,0-5,5v4H20V17A5,5,0,0,0,15,12Zm3,7H6V17a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3Zm-6-8A4,4,0,1,0,8,7,4,4,0,0,0,12,11Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z" />
            </svg>
          </li>
          <li className="t_mini-link">
            <svg>
              <path d="M16,14l2-2V22H2V2H16L14,4H4V20H16ZM12,6H6V8h6ZM6,12H8V10H6Zm-.23,6.29,4.66-2.05L22,4.66,19.34,2,7.72,13.73Z" />
            </svg>
          </li>
          <li className="t_mini-link">
            <svg>
              <path d="M16.677 10l-1.245-3.114L12.646 5h-1.292L8.568 6.886 7.323 10H2l2.544 7.633A2 2 0 0 0 6.441 19h11.117a2 2 0 0 0 1.898-1.368L22 10zm-6-3h2.646l1.2 3H9.477zm6.881 10H6.441l-1.666-5h14.45z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default NavBar;
