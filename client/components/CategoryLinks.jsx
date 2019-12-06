import React from 'react';
import T from 'prop-types';

const CategoryLinks = ({ linksList }) => (
  <div className="t_category-links-container">
    <ol className="t_name-link-list">
      {linksList.map((item) => (<li key={item} className="t_category-link-item t_name-link">{item}</li>))}
    </ol>
  </div>
);

CategoryLinks.propTypes = {
  linksList: T.arrayOf(T.string).isRequired,
};

export default CategoryLinks;
