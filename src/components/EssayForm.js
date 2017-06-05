import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Type in your name',
      color: 'What is your favorite color?'
    };
  }

  handleNameChange = (name) => {
    this.setState(
      {name: name}
    );
  }

  handleColorChange = (color) => {
    this.setState(
      {color: color}
    );
  }

  handleSubmit = (event) => {
    alert(this.state.name + '’s favorite color is ' + this.state.color + '.');
    event.preventDafualt();
  }

  render() {
    return (
      <EssayFormInput
        onNameChangeInput={this.handleNameChange}
        onColorChangeInput={this.handleColorChange}
        handleSubmit={this.handleSubmit}
        name={this.state.name}
        color={this.state.color}
      />
    );
  }
}

class EssayFormInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNameChange = (e) => {
    this.props.onNameChangeInput(e.target.value);
  }

  handleColorChange = (e) => {
    this.props.onColorChangeInput(e.target.value);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Your name:
          <input
            type="text"
            value={this.props.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Your favorite color:
          <textarea
            value={this.props.color} onChange={this.handleColorChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
