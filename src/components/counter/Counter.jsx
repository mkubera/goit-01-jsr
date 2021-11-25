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
  // changeCount
  // arg: action === "incr" | "decr"
  changeCount = (action = "incr") => {
    this.setState((state, props) => ({
      ...state,
      count:
        action === "incr" ? state.count + props.step : state.count - props.step, // TODO: turn into a pseudo-switch
    }));
  };
  // handleIncrement = (e) => {
  //   this.setState((state, props) => ({
  //     ...state,
  //     count: state.count + props.step,
  //   }));
  // };

  // handleDecrement = (e) => {
  //   this.setState((state, props) => ({
  //     ...state,
  //     count: state.count - props.step,
  //   }));
  // };

  //  VIEW
  render() {
    const { step } = this.props;
    const { count } = this.state;

    return (
      <div>
        <p>
          <button type="button" onClick={(e) => this.changeCount("incr")}>
            +{step}
          </button>
        </p>
        <p>
          <span>{count}</span>
        </p>
        <p>
          <button type="button" onClick={(e) => this.changeCount("decr")}>
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
