import React from 'react';
import T from 'prop-types';

const SuggestedItem = ({ item }) => {
  console.log(item);
};

export default SuggestedItem;

SuggestedItem.propTypes = {
  item: T.shape(
    T.number,
    T.string,
    T.string,
    T.string,
    T.string,
    T.string,
  ),
};
