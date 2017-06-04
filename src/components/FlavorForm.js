import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'passionfruit'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('You have chosen the flavor of: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the flavor you want:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Passionfruit">Passionfruit</option>
            <option value="Orange">Orange</option>
            <option value="Pineapple">Pineapple</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
