/* eslint-disable jsx-a11y/control-has-associated-label */
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
      currentItem: 1,
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
    this.searchForSuggestedItems = this.searchForSuggestedItems.bind(this);
    this.selectSearchedItem = this.selectSearchedItem.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
    this.getHistory();
  }

  onTyping(event) {
    this.setState({
      input: event.target.value,
    });
    this.searchForSuggestedItems(event.target.value);
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

  searchForSuggestedItems(input) {
    const { products } = this.state;
    let suggestedItems = _.filter(products, (item) => {
      return item.simple_name.includes(input)
      || item.description.toLowerCase().includes(input)
      || item.category.includes(input);
    });
    suggestedItems = suggestedItems.slice(0, 6);
    this.setState({
      suggestedItems,
    });
  }

  selectSearchedItem(event) {
    //
  }

  rotateSuggestedSearches() {
    const suggested = [];
  }

  render() {
    const {
      popularSearches, history, input, suggestedItems, showModal, isSelected,
    } = this.state;

    const selected = isSelected ? 't_selectedInput' : 't_unselectedInput';

    return showModal ? (
      <div>
        <div className="t_search-modal-overlay" onClick={this.unselectModal}>
          <div
            className="t_search-box-container"
            onClick={(e) => {
              e.stopPropagation();
              this.unselectSearchBar();
            }}
          >
            <form className="t_search-form">
              <div className="t_search-field">
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
                  placeholder={`Search for ${'categories'}`}
                />
                {input !== '' ? (
                  <span className="t_search-buttons-wrapper">
                    <button
                      type="button"
                      className="t_search-button t_search-button-reset"
                      onClick={this.clearInput}
                    />
                    <button
                      type="button"
                      className="t_search-button t_search-button-search"
                      onClick={() => {
                        this.addHistoryItem(input);
                      }}
                    />
                  </span>
                ) : null}
              </div>
            </form>
            <div className="t_under-search-field">
              <div className="t_search-bar-area">
                {history.length > 0 && input === ''
                  ? (<HistoryList history={history} clearHistory={this.clearHistory} />) : null }
                {input === '' ? <PopularSearches popularSearches={popularSearches} /> : null}
                {input !== '' ? <AutoFillList autoFillOptions={['I AM AUTØFILL', 'MØAR AUTOFILL']} /> : null }
                {input !== '' ? <CategoryLinks linksList={['LOVELI LAKES', 'TRI A MØØS VACATION']} /> : null }
                {input !== '' && suggestedItems.length > 0 ? (<SuggestedList suggestedItems={suggestedItems} />) : null }
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="t_search-field">
        <input type="text" value={input} readOnly className="t_unselectedInput t_input-bar" onClick={this.selectModal} placeholder="Search for categories" />
      </div>
    );
  }
}