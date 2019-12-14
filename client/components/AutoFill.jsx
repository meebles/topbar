/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import T from 'prop-types';

const AutoFillList = ({ autoFillOptions, currentInput, goToMeatballs }) => (
  <ol className="t_name-link-list t_autofill-list">
    {autoFillOptions.map((autofill) => (
      <li key={autofill} className="t_name-link">
        {currentInput.toLowerCase()}
        <span className="t_autofill-suggestion">{autofill}</span>
      </li>
    ))}
    <li key="meatballs" className="t_name-link" onClick={goToMeatballs}>
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
  goToMeatballs: T.func.isRequired,
};
