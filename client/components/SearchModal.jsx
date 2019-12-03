import React from 'react';
import T from 'prop-types';
import Axios from 'axios';
import HistoryItem from './HistoryItem';

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      products: [],
      popularSearches: ['desk', 'dresser', 'mirror', 'tv stand', 'shelves', 'kallax'],
    };

    this.getAll = this.getAll.bind(this);
  }


  componentDidMount() {
    this.getAll();
  }

  onTyping(event) {
    this.setState({
      input: event.target.value,
    });
  }

  getAll() {
    Axios.get('/products')
      .then((data) => {
        console.log(data.data);

        this.setState({
          products: data.data,
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
    const { history } = this.props;
    const { popularSearches } = this.state;

    return (
      <div>
        <div className="t_history">
          <div>Search History</div>
          <ul>{history.map((historyItem) => (<HistoryItem historyItem={historyItem} />))}</ul>
        </div>
        <div className="t_popularItems">
          <div>Popular Items</div>
          <ul>{popularSearches.map((item) => (<div key={`${item}`}>{item}</div>))}</ul>
        </div>
      </div>
    );
  }
}

SearchModal.propTypes = {
  history: T.arrayOf(T.string).isRequired,
};
