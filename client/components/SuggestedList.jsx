import React from 'react';
import T from 'prop-types';
import SuggestedItem from './SuggestedItem';

const SuggestedList = ({ suggestedItems, selectSearchedItem }) => (
  <div className="t_suggestions-list-container">
    <ol className="t_suggested-list">
      {suggestedItems.map((item) => (
        <SuggestedItem
          key={item.id}
          item={item}
          selectSearchedItem={selectSearchedItem}
        />
      ))}
    </ol>
  </div>
);

SuggestedList.propTypes = {
  suggestedItems: T.arrayOf(T.object).isRequired,
  selectSearchedItem: T.func.isRequired,
};

export default SuggestedList;
