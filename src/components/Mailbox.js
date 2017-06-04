import React, { Component } from 'react';

class Mailbox extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.userName}!</h2>
        {this.props.unreadMessages.length > 0 &&
          <h3>You have {this.props.unreadMessages.length} unread messages.</h3>
        }
      </div>
    );
  }
}

export default Mailbox;
