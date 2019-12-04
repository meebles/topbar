/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Axios from 'axios';

import SuggestedList from './components/SuggestedList';
import HistoryList from './components/HistoryList';
import PopularSearches from './components/PopularSearches';

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
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
    this.selectModal = this.selectModal.bind(this);
    this.unselectModal = this.unselectModal.bind(this);
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
          suggestedItems: data.data.slice(0, 6),
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

  selectModal() {
    this.setState({
      showModal: true,
    });
  }

  unselectModal() {
    this.setState({
      showModal: false,
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

  searchForSuggestedItems() {
    const { input, products } = this.state;

    //
  }

  render() {
    const {
      popularSearches, history, input, suggestedItems, showModal, isSelected,
    } = this.state;

    const selected = isSelected ? 't_selectedInput' : 't_unselectedInput';

    return showModal ? (
      <div className="t_search-modal-container" onClick={this.unselectModal}>
        <div
          className="t_search-box-overlay"
          onClick={(e) => {
            e.stopPropagation();
            this.unselectSearchBar();
          }}
        >
          <form>
            <input type="text" className={selected} onFocus={this.selectSearchBar} onChange={this.onTyping} />
            {input !== '' ? (
              <span>
                <button type="button">X</button>
                <button type="submit">=&gt;</button>
              </span>
            ) : null}
          </form>
          <div className="t_search-bar-area">
            {history.length > 0
              ? (<HistoryList history={history} clearHistory={this.clearHistory} />) : null }
            <PopularSearches popularSearches={popularSearches} />
            {/* {input !== '' ? (<SuggestedList suggestedItems={suggestedItems} />) : null } */}
          </div>
        </div>
      </div>
    ) : (
      <div>
        <input type="text" className="t_unselectedInput" onClick={this.selectModal} placeholder="Search for categories" />
      </div>
    );
  }
}
