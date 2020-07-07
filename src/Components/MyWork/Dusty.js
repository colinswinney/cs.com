import React, { Component } from "react"
import $ from "jquery"
import { CSSTransition } from "react-transition-group"
 
class Dusty extends Component {

	state = {
    showContent: false,
  };

  switch = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }));
  };


  render() {
    return (
      <div>
        <button className="open btn btn-primary" onClick={this.switch} style={{backgroundColor: 'red'}}>
          open
        </button>
        <CSSTransition
          in={this.state.showContent}
          timeout={400}
          classNames="cs-page"
          unmountOnExit
          appear
        >
          <div className="dusty-content">
            content
          </div>
        </CSSTransition>
      </div>
    );
  }
}
 
export default Dusty;