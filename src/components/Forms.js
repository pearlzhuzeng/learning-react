import React from 'react';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import ReservationForm from './ReservationForm';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <div><NameForm /></div>
        <div><EssayForm /></div>
        <div><FlavorForm /></div>
        <div><ReservationForm /></div>
      </div>
    );
  }
}

export default Forms;
