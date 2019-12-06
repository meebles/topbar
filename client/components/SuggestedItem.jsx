/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import T from 'prop-types';

const SuggestedItem = ({ item = { real_name: 'Item not found.' }, selectSearchedItem }) => {
  return (
    <li
      className="t_suggested-item-container t_name-link"
      onClick={() => {
        selectSearchedItem(item.id);
      }}
    >
      <img src={item.image_address} alt="" className="t_suggested-item-image" />
      <div className="t_suggested-item-info">
        <div className="t_suggested-item-name">{item.real_name}</div>
        <div className="t_suggested-item-description">{item.description}</div>
      </div>
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
  selectSearchedItem: T.func.isRequired,
};
