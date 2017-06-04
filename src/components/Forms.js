import React from 'react';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <div><NameForm /></div>
        <div><EssayForm /></div>
        <div><FlavorForm /></div>
      </div>
    );
  }
}

export default Forms;
