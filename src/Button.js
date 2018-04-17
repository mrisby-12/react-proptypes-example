import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css'

class Button extends Component {
  render() {
    return (
      <button
        style={{
          border: this.props.style.border,
          backgroundColor: this.props.style.backgroundColor,
          color: this.props.style.color
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;

Button.PropTypes = {
  style: PropTypes.shape({
    border: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
  }),
  children: PropTypes.string.isRequired
};