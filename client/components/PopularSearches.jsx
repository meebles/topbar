import React from 'react';
import T from 'prop-types';

const PopularSearches = ({ popularSearches }) => (
  <div className=" t_popular-searches-list">
    <div className="t_search-title">Popular searches</div>
    <ul>
      {popularSearches.map((item) => <div className="t_name-link" key={item}>{item}</div>)}
    </ul>
  </div>
);

PopularSearches.propTypes = {
  popularSearches: T.arrayOf(T.string).isRequired,
};

export default PopularSearches;
