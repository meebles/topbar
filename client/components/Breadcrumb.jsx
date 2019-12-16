/* eslint-disable camelcase */
import React from 'react';
import T from 'prop-types';

const RawBreadcrumb = ({ currentItem }) => {
  const { category, real_name } = currentItem;
  let formatCat = category[0].toUpperCase() + category.slice(1);
  const lastChar = formatCat[formatCat.length - 1];
  if (lastChar !== 'n' && lastChar !== 's') formatCat += 's';

  const isMeatballs = currentItem.id === 40 || currentItem.id === 81;

  return (
    <div className="t_breadcrumb-wrapper">
      <div className="t_breadcrumb-container">
        <ul className="t_breadcrumb-list">
          <li className="t_breadcrumb-item">
            <span className="t_breadcrumb">Home</span>
          </li>
          <li className="t_breadcrumb-item">
            <span className="t_breadcrumb">Products</span>
          </li>
          {!isMeatballs ? (
            <li className="t_breadcrumb-item">
              <span className="t_breadcrumb">Non-meatball Items</span>
            </li>
          ) : null}
          <li className="t_breadcrumb-item">
            <span className="t_breadcrumb">{formatCat}</span>
          </li>
          <li className="t_breadcrumb-item t_last-crumb">
            <span className="t_breadcrumb-product">{real_name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Breadcrumb = React.memo(RawBreadcrumb);

export default Breadcrumb;

RawBreadcrumb.propTypes = {
  currentItem: T.shape({
    id: T.number.isRequired,
    category: T.string.isRequired,
    real_name: T.string.isRequired,
  }).isRequired,
};
