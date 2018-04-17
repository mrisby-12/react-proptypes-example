import React from "react";

class Airplane extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ height: "200px", position: "relative" }}>
        <h1>
          Our plane is being moved across the container based on the mouse
          position from the WithMouse Component that is rendering our
          MouseComponent within its render prop.
        </h1>
        <img
          onClick={this.props.handleClick}
          src="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/352/vRIW46-TopView.png"
          style={{
            position: "absolute",
            top: this.props.y - 400,
            left: this.props.x,
            width: "50px",
            height: "50px"
          }}
          alt="plane"
        />
      </div>
    );
  }
}

export default Airplane;
