// snippet: rce
import React, { Component } from "react";

class Counter extends Component {
  // static defaultProps = {
  //   step: 1,
  // };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: this.props.initCount,
  //   };
  // }

  // MODEL / STATE
  state = {
    count: this.props.initCount,
  };

  // UPDATE
  handleIncrement = (e) => {
    this.setState((state, props) => ({
      ...state,
      count: state.count + props.step,
    }));
  };

  handleDecrement = (e) => {
    this.setState((state, props) => ({
      ...state,
      count: state.count - props.step,
    }));

    // this.setState({count: this.state.count - this.props.step})
  };

  //  VIEW
  render() {
    const { step } = this.props;
    const { count } = this.state;

    return (
      <div>
        <p>
          <button type="button" onClick={this.handleIncrement}>
            +{step}
          </button>
        </p>
        <p>
          <span>{count}</span>
        </p>
        <p>
          <button type="button" onClick={this.handleDecrement}>
            -{step}
          </button>
        </p>
      </div>
    );
  }
}

export default Counter;

// class Counter extends Component {
//

//   render() {
//

//     return (
//       <div>
//         <
//       </div>
//     );
//   }
// }
