import React from 'react';

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
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div>I am the Topbar</div>
        <p>{products[0].name}</p>
      </div>
    );
  }
}
