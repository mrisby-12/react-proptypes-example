import React, { Component } from "react";
import withMouse from "./withMouse";
import withPeople from "./withPeople";

class Mouse extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        The Location of the Mouse is {this.props.mouse.x} and{" "}
        {this.props.mouse.y}
      </div>
    );
  }
}

export const MouseHOC = withPeople(withMouse(Mouse));
