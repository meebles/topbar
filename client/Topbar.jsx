import React from 'react';
import SearchModal from './components/SearchModal';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    };
  }

  render() {
    const { isSelected } = this.state;

    return isSelected ? (
      <div>
        <input type="text" className="t_selectedInput" placeholder="Search for categories" />
        <SearchModal />
      </div>
    ) : (
      <div>
        <input type="text" className="t_unselectedInput" />
        <div>I am not selected.</div>
      </div>
    );
  }
}
