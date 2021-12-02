import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}

export default TextInput;
