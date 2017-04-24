import React, { Component } from 'react';
import logo from './logo.svg';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 57,
      minutes: 0,
      hours: 0,
    }
  }
  tick() {
    this.setState((previousState) => ({
      seconds: previousState.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  timeM(seconds) {
    if (this.state.seconds > 59) {
      this.setState.minutes(this.state.minutes + 1) &&
      this.setState.seconds(0)
    }
  }
  render() {
    return (
      <div className="Clock">
      <div className="Clock-header">
      <img src={logo} className="Clock-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <p className="Clock-intro">
      To get started, edit <code>src/Clock.js</code> and save to reload.
      </p>
      <div>seconds: {this.state.seconds}</div>
      <div>minutes: {this.state.minutes}</div>
      </div>
    );
  }
}
export default Clock;