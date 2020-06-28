import React, { Component } from "react";
 
class NoMatch extends Component {
  render() {
    return (
      <div className={`content ${this.props.contentClass}`}>
        <h2>404</h2>
      </div>
    );
  }
}
 
export default NoMatch;