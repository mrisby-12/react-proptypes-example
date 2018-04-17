import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <button
        style={{
          border: this.props.style.border || "",
          padding: this.props.style.padding || "",
          backgroundColor: this.props.style.backgroundColor,
          color: this.props.style.color
        }}
        onClick={this.props.clickHandler}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  style: PropTypes.shape({
    border: PropTypes.string,
    padding: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
  }),
  clickHandler: PropTypes.func,
  children: PropTypes.string.isRequired
};

export default Button;
