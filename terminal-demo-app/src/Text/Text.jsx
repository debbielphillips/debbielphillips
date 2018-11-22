// @flow

import * as React from "react";

import "./Text.css";

class Text extends React.Component {
  getColor = color => {
    switch (color) {
      case "grey":
        return "#C1C9D2";
      case "lightGrey":
        return "#8792A2";
      default:
        return "#E3E8EE";
    }
  };

  render() {
    const { children, color, size } = this.props;
    return (
      <span
        className="Text"
        style={{ fontSize: size || 14, color: this.getColor(color) }}
      >
        {children}
      </span>
    );
  }
}

export default Text;
