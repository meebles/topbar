import React from 'react';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }

  render() {
    return (
      <div>
        <div>I am the Topbar</div>
      </div>
    );
  }
}
