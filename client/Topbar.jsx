import React from 'react';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Dragon',
          category: 'kitchenware',
        },
        {
          id: 2,
          name: 'Swingset',
          category: 'toys',
        },
      ],
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div>I am the Topbar</div>
        <p>{products}</p>
      </div>
    );
  }
}
