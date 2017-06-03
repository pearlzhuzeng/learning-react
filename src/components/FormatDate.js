import React from 'react';

class FormatDate extends React.Component {
  render() {
    return (
      <div>The current time is: {this.props.date.toLocaleTimeString()}</div>
    );
  }
}


export default FormatDate;
