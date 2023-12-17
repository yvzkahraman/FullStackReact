//stateless => 
import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }

  }
  render(
  ) {
    return <div className="container mt-5">

      <h4 className="text-center">Counter App</h4>
      <p className="text-center lead ">Hello React - Counter : <strong> {this.state.counter}</strong></p>
      <div className="text-center">

        <button className="btn btn-primary me-1" onClick={() => {
          // this.state.counter = this.state.counter + 1;
          this.setState({
            counter: this.state.counter + 1
          })

        }} >+</button>
        <button className="btn btn-primary" onClick={() => {
          this.setState({
            counter: this.state.counter - 1,
          })
        }}>-</button>
      </div>
    </div>
  }
}
export default Counter;