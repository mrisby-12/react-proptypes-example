import React, { Component } from "react";
import withMouse from "./withMouse";

class Airplane extends Component {
  render() {
    return (
      <div style={{ height: "400px", width: "100%", position: "relative" }}>
        <img
          src={this.props.img}
          style={{
            position: "absolute",
            top: this.props.mouse.y,
            left: this.props.mouse.x,
            width: "50px",
            height: "50px"
          }}
        />
      </div>
    );
  }
}

export const MovePlane = withMouse(Airplane);
