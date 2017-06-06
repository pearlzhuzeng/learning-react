import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Clock from './components/Clock';
import Counter from './components/Counter';
import ToggleOnOff from './components/ToggleOnOff';
import LoginControl from './components/LoginControl';
import Mailbox from './components/Mailbox';
import PageWarning from './components/PageWarning';
import NumberList from './components/NumberList';
import Forms from './components/Forms';
import BoilingCalculator from './components/BoilingCalculator';
import FancyBorder from './components/FancyBorder';
import SplitPane from './components/SplitPane';
import FilterableProductTable from './components/FilterableProductTable';
import TodoList from './components/TodoList';

const comment = {
  date: new Date(),
  text: 'This is the first comment',
  author: {
    name: 'Pearl Zeng',
    avatarUrl: 'https://i1.wp.com/asknature.org/wp-content/uploads/strategy/a284195e8d52b20f9ac84213545b96f1/squirrel.jpg?resize=646%2C430&ssl=1'
  }
}

const mailuser = {
  name: 'Squirrel',
  messages: ['message 1', 'message 2', 'message 3', 'message 4']
}

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Welcome name="Mark" />
          <Welcome name="Pearl" />
        </p>
        <div>
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        </div>
        <div><Clock /></div>
        <div><Counter /></div>
        <div><ToggleOnOff /></div>
        <div><LoginControl /></div>
        <div><Mailbox unreadMessages={mailuser.messages} userName={mailuser.name} /></div>
        <div><PageWarning /></div>
        <div><NumberList numbers={numbers}/></div>
        <div><Forms /></div>
        <div><BoilingCalculator /></div>
        <div><FancyBorder /></div>
        <div><SplitPane /></div>
        <div><FilterableProductTable /></div>
        <div><TodoList /></div>
      </div>
    );
  }
}

export default App;
