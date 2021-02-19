import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Counter.css";

class CounterButton extends Component {

    render() {
      return (
        <div className="counter">
          <button onClick={() => this.props.changeCounterValueMethod(this.props.by,this.props.sign)}>{this.props.sign}{this.props.by}</button>
        </div>
      );
    }
  }
  
  CounterButton.defaultProps ={
    by:1,
    sign : "-"
  }
  
  CounterButton.propTypes = {
    by: PropTypes.number
  }

export default CounterButton;