import React, { Component } from "react"
 
class Home extends Component {
  render(...props) {
    return (
      <div className={`cs-page ${this.props.contentClass}`}>
          <div className="cs-content-header">
            <div className="cs-content-header-inner">
              <h2 className="cs-content-title">{this.props.title}</h2>
              <p>Web Developer</p>
            </div>
          </div>
          {/*<div className="cs-content-main">
          </div>*/}
      </div>
    );
  }
}
 
export default Home;