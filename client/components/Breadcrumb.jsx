import React from 'react';
import T from 'prop-types';

const RawBreadcrumb = (currentItem) => {
  console.log(currentItem);

  const { category, real_name } = currentItem;
  return (
    <span className="t_breadcrub-container">
      <ul className="t_breadcrumbs-list">
        <li className="t_bread-crumb">Home</li>
        <li className="t_bread-crumb">/</li>
        <li className="t_bread-crumb">Products</li>
        <li className="t_bread-crumb">/</li>
        <li className="t_bread-crumb">{category}</li>
        <li className="t_breadcrumb">/</li>
        <li className="t_bread-crumb">{real_name}</li>
      </ul>
    </span>
  );
};

const Breadcrumb = React.memo(RawBreadcrumb);

export default Breadcrumb;

Breadcrumb.propTypes = {
  currentItem: T.shape({
    category: T.string.isRequired,
    real_name: T.string.isRequired,
  }).isRequired,
};
