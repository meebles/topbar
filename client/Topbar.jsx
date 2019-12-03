import React from 'react';
import Axios from 'axios';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Dragon',
          category: 'kitchen',
        },
        {
          id: 2,
          name: 'Swingset',
          category: 'outdoor',
        },
      ],
    };

    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
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

  render() {
    return (
      <div>
        <div>I am the Topbar</div>
      </div>
    );
  }
}
