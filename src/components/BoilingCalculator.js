import React from 'react'
import TemperatureInput from './TemperatureInput'

class BoilingCalculator extends React.Component {
  state: { temperature: string, scale: 'c' | 'f' } = {
    temperature: '',
    scale: 'c',
  }

  handleCelsiusChange = (temperature: string) => {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange = (temperature: string) => {
    this.setState({ scale: 'f', temperature })
  }

  render () {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f'
      ? convertTemperature(temperature, toCelsius)
      : temperature
    const fahrenheit = scale === 'c'
      ? convertTemperature(temperature, toFahrenheit)
      : temperature

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

function convertTemperature (
  temperature: string,
  convert: number => number
): string {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

function toCelsius (fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius: number): number {
  return celsius * 9 / 5 + 32
}

const BoilingVerdict = (props: { celsius: number }) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would NOT boil.</p>
}

export default BoilingCalculator
