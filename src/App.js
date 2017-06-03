import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Clock from './components/Clock';
import Counter from './components/Counter';

const comment = {
  date: new Date(),
  text: 'This is the first comment',
  author: {
    name: 'Pearl Zeng',
    avatarUrl: 'https://i1.wp.com/asknature.org/wp-content/uploads/strategy/a284195e8d52b20f9ac84213545b96f1/squirrel.jpg?resize=646%2C430&ssl=1'
  }
}

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
      </div>
    );
  }
}

export default App;
