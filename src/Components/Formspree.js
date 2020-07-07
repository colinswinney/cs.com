// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mzbjezon"
        method="POST"
      >
        <h3>Send a message!</h3>
        <div className="form-group">
        {/*<label>name:</label>*/}
        <input className="form-control" type="text" name="name" placeholder="name" />
        </div>
        <div className="form-group">
        {/*<label>email:</label>*/}
        <input className="form-control" type="email" name="email" placeholder="email" />
        </div>
        <div className="form-group">
        {/*<label>message:</label>*/}
        <textarea className="form-control" type="text" rows="5" name="message" placeholder="message" />
        </div>
        {status === "SUCCESS" ? <p className="btn btn-success">Thank You!</p> : <button className="btn btn-primary">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}