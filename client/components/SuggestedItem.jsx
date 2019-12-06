import React from 'react';
import T from 'prop-types';

const SuggestedItem = ({ item = { real_name: 'Item not found.' } }) => {
  return (
    <li className="t_suggested-item-container t_name-link">
      <img src={item.image_address} alt="" />
      <span>
        <div className="t_suggested-item-name">{item.real_name}</div>
        <div>{item.description}</div>
      </span>
    </li>
  );
};

export default SuggestedItem;

SuggestedItem.propTypes = {
  item: T.shape({
    id: T.number,
    real_name: T.string,
    simple_name: T.string,
    category: T.string,
    description: T.string,
    image_address: T.string,
  }).isRequired,
};
