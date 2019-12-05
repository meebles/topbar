import React from 'react';
import T from 'prop-types';

const HistoryList = ({ history, clearHistory }) => {
  return (
    <div>
      <div className="t_search-history-title">Your search history</div>
      <ul>
        {history.map((item) => (<div key={item.searchItem} className="t_name-link">{item.searchItem}</div>))}
        <button onClick={clearHistory} type="button" className="t_search-clear-button">X Clear search history</button>
      </ul>
    </div>
  );
};

HistoryList.propTypes = {
  history: T.arrayOf(T.object).isRequired,
  clearHistory: T.func.isRequired,
};

export default HistoryList;
