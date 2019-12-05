import React from 'react';
import T from 'prop-types';

const CategoryLinks = ({ linksList }) => (
  <div className="t_category-links">
    {linksList.map((item) => (<div key={item} className="t_category-link-item">{item}</div>))}
  </div>
);

CategoryLinks.propTypes = {
  linksList: T.arrayOf(T.string).isRequired,
};

export default CategoryLinks;
