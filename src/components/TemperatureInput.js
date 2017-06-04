import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = (e) => {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default TemperatureInput;
