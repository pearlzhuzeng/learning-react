import React from 'react';
import TemperatureInput from './TemperatureInput';

class BoilingCalculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
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
