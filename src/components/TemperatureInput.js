import React from 'react';

class TemperatureInput extends React.Component {
  handleChange = (e) => {
    //Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    //Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}: </legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default TemperatureInput;
