import React, { Component } from "react";
import MyForm from "./Formspree.js";
 
class Contact extends Component {
  render(...props) {
    return (
      <div className={`cs-page ${this.props.contentClass}`}>
          <div className="cs-content-header">
            <div className="cs-content-header-inner">
              <h2 className="cs-content-title">{this.props.title}</h2>
              <MyForm/>
            </div>
          </div>
      </div>
    );
  }
}
 
export default Contact;