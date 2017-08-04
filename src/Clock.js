import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 57,
      minutes: 59,
      hours: 0,
    }
  }
  tick() {
    if (this.state.seconds % 60 === 59) {
      this.setState((previousState) =>
      ({minutes: (previousState.minutes + 1)%60}))
    }
    if ((this.state.minutes % 60 === 59) &&
    (this.state.seconds % 60 === 59)) {
      console.log('b')
      this.setState((previousState) =>
      ({hours: previousState.hours + 1}))
    }
    this.setState((previousState) => ({
      seconds: (previousState.seconds + 1) % 60
    }))

  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Clock">
        <div>seconds: {this.state.seconds}</div>
        <div>minutes: {this.state.minutes}</div>
        <div>hours: {this.state.hours}</div>

      </div>
    );
  }
}
export default Clock;
