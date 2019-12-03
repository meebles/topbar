import React from 'react';
import SearchModal from './components/SearchModal';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
      history: [],
    };
  }

  render() {
    const { isSelected, history } = this.state;

    return isSelected ? (
      <div>
        <input type="text" className="t_selectedInput" />
        <SearchModal history={history} />
      </div>
    ) : (
      <div>
        <input type="text" className="t_unselectedInput" />
        <div>I am not selected.</div>
      </div>
    );
  }
}
