import React, { Component } from "react";
import CounterButton from "./CounterButton.jsx";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super(); // -> always necessary in js
    this.state = {
      counter: 0,
      secondCounter: 100,
    };

    this.changeCounterValue = this.changeCounterValue.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="Counter">
        <div className="increment">
          <CounterButton
            sign="+"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={5}
            sign="+"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={10}
            sign="+"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
        </div>
        <div className="decrement">
          <CounterButton
            by={1}
            sign="-"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={5}
            sign="-"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={10}
            sign="-"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
        </div>
        <div className="multiply">
          <CounterButton
            by={1}
            sign="*"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={5}
            sign="*"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={10}
            sign="*"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
        </div>
        <div className="divide">
          <CounterButton
            by={1}
            sign="/"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={5}
            sign="/"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
          <CounterButton
            by={10}
            sign="/"
            changeCounterValueMethod={this.changeCounterValue}
          ></CounterButton>
        </div>
        <div>
          <span className="count" /*style={style}*/>{this.state.counter}</span>
        </div>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  changeCounterValue(by, sign) {
    this.setState((prevState) => {
      switch (sign) {
        case "+":
          return { counter: prevState.counter + by };
        case "-":
          return { counter: prevState.counter - by };
        case "*":
          return { counter: prevState.counter * by };
        case "/":
          return { counter: prevState.counter / by };
      }
    });
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }
}

export default Counter;
