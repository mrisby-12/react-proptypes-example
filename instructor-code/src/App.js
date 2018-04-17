import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

import { MouseHOC } from "./HOC/Mouse";
import { MovePlane } from "./HOC/Airplane";
import List from "./HOC/List";

import Airplane from "./RenderProps/Airplane";
import WithMouse from "./RenderProps/WithMouse";

const buttonStyle = {
  backgroundColor: "blue",
  padding: "10px",
  color: "#fff",
  border: "5px solid red"
};

class App extends Component {
  handleAlert() {
    return alert("It was handled");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button style={buttonStyle} clickHandler={this.handleAlert}>
          Click Here
        </Button>
        <Button
          style={buttonStyle}
          clickHandler={() => console.log("Super Cool Click eh")}
        >
          Super super Cool
        </Button>
        <MouseHOC />
        <MovePlane img="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/352/vRIW46-TopView.png" />
        <List />
        <WithMouse
          render={props => (
            <div>
              <Airplane {...props} handleClick={this.handleAlert} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
