import React from 'react';

class BoilingCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = (e) => {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <lengend>Enter temperature in Celsius:</lengend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would NOT boil.</p>
}

export default BoilingCalculator;
