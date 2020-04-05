import React, { Component } from "react";

class Counter extends Component {
  // we need a single source of truth
  // a controlled component should be controlled by its parent and should not have its own local state
  render() {
    // console.log("props", this.props); //props is a javascript object
    return (
      <div>
        {this.props.children} {/*props is read-only*/}
        <span className={this.setBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter.id);
          }}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
        <button
          // onClick={this.props.onDelete} //raising an event
          // OR logic can be done here
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-md m-3 btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  setBadgeClass() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;