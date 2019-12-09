import React from 'react';
import T from 'prop-types';

const AutoFillList = ({ autoFillOptions, currentInput }) => (
  <ol className="t_name-link-list">
    {autoFillOptions.map((autofill) => (
      <li key={autofill} className="t_name-link">
        {currentInput}
        <span className="t_autofill-suggestion">{autofill}</span>
      </li>
    ))}
    <li key="meatballs" className="t_name-link">
      Did you mean &quot;
      <span className="t_autofill-suggestion">swedish meatballs</span>
      &quot;?
    </li>
  </ol>
);

export default AutoFillList;

AutoFillList.propTypes = {
  autoFillOptions: T.arrayOf(T.string).isRequired,
  currentInput: T.string.isRequired,
};
