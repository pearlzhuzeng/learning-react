import React from 'react';
import NameForm from './NameForm';
import EssayForm from './EssayForm';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <div><NameForm /></div>
        <div><EssayForm /></div>
      </div>
    );
  }
}

export default Forms;
