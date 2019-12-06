import React from 'react';
import T from 'prop-types';
import SuggestedItem from './SuggestedItem';

const SuggestedList = ({ suggestedItems }) => (
  <div className="t_suggestions-list-container">
    <ol className="t_suggested-list">
      {suggestedItems.map((item) => (<SuggestedItem key={item.id} item={item} />))}
    </ol>
  </div>
);

SuggestedList.propTypes = {
  suggestedItems: T.arrayOf(T.object).isRequired,
};

export default SuggestedList;
