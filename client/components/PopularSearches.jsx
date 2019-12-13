import React from 'react';
import T from 'prop-types';

const PopularSearches = ({ popularSearches, isFirstChild }) => {
  const borderStatus = isFirstChild ? 'none' : '1px solid #dfdfdf';

  return (
    <div className="t_popular-searches-container" style={{ borderLeft: borderStatus }}>
      <div className="t_search-title">Popular searches</div>
      <ul className="t_name-link-list">
        {popularSearches.map((item) => <div className="t_name-link t_history-item" key={item}>{item}</div>)}
      </ul>
    </div>
  );
};

PopularSearches.propTypes = {
  popularSearches: T.arrayOf(T.string).isRequired,
  isFirstChild: T.bool.isRequired,
};

export default PopularSearches;
