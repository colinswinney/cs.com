import React, { Component } from "react";
import MyForm from "./Formspree.js";
 
class Contact extends Component {
  render(...props) {
    return (
      <div>
        <p>Send an email to <a href="mailto:colinjswinney@gmail.com">colinjswinney@gmail.com</a>.
        </p>
        <MyForm/>
      </div>
    );
  }
}
 
export default Contact;