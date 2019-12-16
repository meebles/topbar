import React from 'react';
import T from 'prop-types';

const FadingPlaceholder = ({ currentActive }) => {
  const active = ' t_placeholder-active';
  let firstActive = '';
  let secondActive = '';
  let thirdActive = '';

  switch (currentActive) {
    case 1:
      firstActive = active;
      thirdActive = '';
      break;
    case 2:
      secondActive = active;
      firstActive = '';
      break;
    case 3:
      thirdActive = active;
      secondActive = '';
      break;
    default:
      firstActive = active;
      break;
  }

  return (
    <span className="t_placeholder-fade-container">
      <ul className="t_placeholder-list">
        <span className="t_placeholder-start">Search for </span>
        <li className={`t_placeholder-item${firstActive}`}>categories</li>
        <li className={`t_placeholder-item${secondActive}`}>content</li>
        <li className={`t_placeholder-item${thirdActive}`}>products</li>
      </ul>
    </span>
  );
};


FadingPlaceholder.propTypes = {
  currentActive: T.number.isRequired,
};

export default FadingPlaceholder;
