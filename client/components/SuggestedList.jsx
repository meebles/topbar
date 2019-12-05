import React from 'react';
import T from 'prop-types';
import SuggestedItem from './SuggestedItem';

const SuggestedList = ({ suggestedItems }) => (
  <div>
    <div className="t_suggestedItemsList">
      {suggestedItems.map((item) => (<SuggestedItem item={item} />))}
    </div>
  </div>
);

SuggestedList.propTypes = {
  suggestedItems: T.arrayOf(T.object).isRequired,
};

export default SuggestedList;
