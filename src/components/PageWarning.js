import React, { Component } from 'react';

class PageWarning extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false};
  }

  handleToggleClick = () => {
    this.setState(prevState => (
      {showWarning: !prevState.showWarning}
    ));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide Warning' : 'Show Warning'}
        </button>
      </div>
    );
  }
}

function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }

  return (
    <h2>Warning!</h2>
  );
}

export default PageWarning;
