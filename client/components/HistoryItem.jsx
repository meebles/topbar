import React from 'react';
import T from 'prop-types';

const HistoryItem = ({ historyItem }) => {
  return (
    <div>{historyItem}</div>
  );
};

HistoryItem.propTypes = {
  historyItem: T.string.isRequired,
};

export default HistoryItem;
