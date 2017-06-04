import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'What is your favorite color?'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Your favorite color is ' + this.state.value + '.');
    event.preventDafualt();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Color:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
