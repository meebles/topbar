import React from 'react';
import T from 'prop-types';

const AutoFillList = ({ autoFillOptions }) => (
  <ol className="t_auto-fill-list">
    {autoFillOptions.map((item) => <li key={item} className="t_auto-fill-item">{item}</li>)}
  </ol>
);

export default AutoFillList;

AutoFillList.propTypes = {
  autoFillOptions: T.arrayOf(T.string).isRequired,
};
