import React from 'react';
import T from 'prop-types';

const CategoryLinks = ({ linksList }) => (
  <ol className="t_category-links">
    {linksList.map((item) => (<li key={item} className="t_category-link-item t_name-link">{item}</li>))}
  </ol>
);

CategoryLinks.propTypes = {
  linksList: T.arrayOf(T.string).isRequired,
};

export default CategoryLinks;
