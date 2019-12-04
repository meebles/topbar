import React from 'react';
import T from 'prop-types';

const HistoryList = ({ history, clearHistory }) => {
  return (
    <div>
      <div>Search History</div>
      <ul>
        {history.map((item) => (<div key={item.searchItem} className="t_name-link">{item.searchItem}</div>))}
        <button type="button" onClick={clearHistory}>Clear History</button>
      </ul>
    </div>
  );
};

HistoryList.propTypes = {
  history: T.arrayOf(T.object).isRequired,
  clearHistory: T.func.isRequired,
};

export default HistoryList;
