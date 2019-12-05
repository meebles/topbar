/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Axios from 'axios';
import _ from 'lodash';

import SuggestedList from './components/SuggestedList';
import HistoryList from './components/HistoryList';
import PopularSearches from './components/PopularSearches';
import CategoryLinks from './components/CategoryLinks';
import AutoFillList from './components/AutoFill';

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

    this.onTyping = this.onTyping.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.addHistoryItem = this.addHistoryItem.bind(this);
    this.selectModal = this.selectModal.bind(this);
    this.unselectModal = this.unselectModal.bind(this);
    this.selectSearchBar = this.selectSearchBar.bind(this);
    this.unselectSearchBar = this.unselectSearchBar.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
    this.getHistory();
  }

  onTyping(event) {
    this.setState({
      input: event.target.value,
    });
    this.searchForSuggestedItems();
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

  selectModal() {
    this.setState({
      showModal: true,
      isSelected: true,
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

  clearInput(event) {
    event.preventDefault();
    this.setState({
      input: '',
    });

    console.log(event);
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
        if (data.data.affectedRows > 0) {
          this.setState({
            history: [],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchForSuggestedItems() {
    const { input, products } = this.state;
    let suggestedItems = _.filter(products, (item) => item.simple_name.includes(input));
    suggestedItems = suggestedItems.slice(0, 6);
    this.setState({
      suggestedItems,
    });
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
            <input
              type="text"
              value={input}
              autoFocus
              className={`${selected} t_input-bar`}
              onClick={(e) => {
                this.selectSearchBar();
                e.stopPropagation();
              }}
              onChange={this.onTyping}
              placeholder="Search for categories"
            />
            {input !== '' ? (
              <span>
                <button type="button" onClick={this.clearInput}>X</button>
                <button
                  type="button"
                  onClick={() => {
                    this.addHistoryItem(input);
                  }}
                >
                  =&gt;
                </button>
              </span>
            ) : null}
          </form>
          <div className="t_search-bar-area">
            {history.length > 0 && input === ''
              ? (<HistoryList history={history} clearHistory={this.clearHistory} />) : null }
            {input === '' ? <PopularSearches popularSearches={popularSearches} /> : null}
            {input !== '' ? <AutoFillList autoFillOptions={['Some option', 'Another option']} /> : null }
            {input !== '' ? <CategoryLinks linksList={['A link', 'Another link']} /> : null }
            {input !== '' && suggestedItems.length > 0 ? (<SuggestedList suggestedItems={suggestedItems} />) : null }
          </div>
        </div>
      </div>
    ) : (
      <div>
        <input type="text" className="t_unselectedInput t_input-bar" onClick={this.selectModal} placeholder="Search for categories" />
      </div>
    );
  }
}
