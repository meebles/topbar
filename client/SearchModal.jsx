/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Axios from 'axios';

import SuggestedList from './components/SuggestedList';
import HistoryList from './components/HistoryList';

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      input: '',
      products: [],
      history: [{
        id: 0,
        searchItem: 'lamps',
      }],
      suggestedItems: [],
      popularSearches: ['desk', 'dresser', 'mirror', 'tv stand', 'shelves', 'kallax'],
    };

    this.getAllProducts = this.getAllProducts.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.addHistoryItem = this.addHistoryItem.bind(this);
    this.onTyping = this.onTyping.bind(this);
    this.selectSearchBar = this.selectSearchBar.bind(this);
    this.unselectSearchBar = this.unselectSearchBar.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
    this.getHistory();
  }


  onTyping(event) {
    this.setState({
      input: event.target.value,
    });
  }

  getAllProducts() {
    Axios.get('/products')
      .then((data) => {
        this.setState({
          products: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getHistory() {
    Axios.get('/history')
      .then((data) => {
        this.setState({
          history: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectSearchBar() {
    this.setState({
      isSelected: true,
    });
  }

  unselectSearchBar() {
    this.setState({
      isSelected: false,
    });
  }

  addHistoryItem(searchItem) {
    Axios
      .post('/history', {
        searchItem,
      })
      .then((data) => {
        const { history } = this.state;
        history.push({
          id: data.insertId,
          searchItem,
        });
        this.setState({
          history,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clearHistory() {
    Axios.delete('/history')
      .then((data) => {
        console.log(data);
        this.setState({
          history: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchItems() {
    const { input, products } = this.state;

    //
  }

  render() {
    const {
      popularSearches, history, input, suggestedItems, isSelected,
    } = this.state;


    return isSelected ? (
      <div className="t_search-box-container">
        <div className="t_search-box-overlay" onClick={this.unselectSearchBar} />
        <input type="text" className="t_selectedInput" />
        <div className="t_search-overlay">
          {history.length > 0
            ? (<HistoryList history={history} clearHistory={this.clearHistory} />) : null }
          <div className="t_popularItems">
            <div>Popular Items</div>
            <ul>{popularSearches.map((item) => (<div key={`${item}`}>{item}</div>))}</ul>
          </div>
          {input !== '' ? (<SuggestedList suggestedItems={suggestedItems} />) : null }
        </div>
        <div className="t_search-box-overlay" onClick={this.unselectSearchBar} />
      </div>
    ) : (
      <div>
        <input type="text" className="t_unselectedInput" onClick={this.selectSearchBar} placeholder="Search for categories" />
      </div>
    );
  }
}

/*  while modal is open:
      when input is empty:
        Search History
        Popular Searches
      when input not empty:
        auto-complete options
        category suggestions
        suggested items thumbnails
*/
