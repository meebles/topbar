import React from 'react';
import SuggestedItem from './SuggestedItem';

export default class SuggestedList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestedItems: [],
    };
  }

  render() {
    return (
      <div>
        <div>The suggestions list.</div>
      </div>
    );
  }
}
