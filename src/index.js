import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";

import icons from "./icon.png";

import "./styles.css";

const iconDiv = ({ hostRef }) => {
  return (
    <div ref={hostRef}>
      <img src={icons} height="100" width="100" />
    </div>
  );
};

const Box = posed(iconDiv)({
  attention: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 0
    }
  },
  none: {
    scale: 1.0,
    transition: "none"
  }
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAttention: "none"
    };

    setInterval(() => {
      this.setState({
        ...this.state,
        isAttention: "attention"
      });
    }, 2000);

    setInterval(() => {
      this.setState({
        ...this.state,
        isAttention: "none"
      });
    }, 2200);
  }

  render() {
    return (
      <div className="App">
        <Box
          style={{ backgroundColor: "yellow", width: 120, height: 120 }}
          pose={this.state.isAttention}
        />
        <h1>{this.state.scanCount}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
