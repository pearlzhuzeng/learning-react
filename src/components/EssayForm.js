import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'your name',
      color: 'What is your favorite color?'
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      name: target.value,
      color: target.value
    });
  }

  handleSubmit = (event) => {
    alert(this.state.name + '’s favorite color is ' + this.state.color + '.');
    event.preventDafualt();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Color:
          <textarea value={this.state.color} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
