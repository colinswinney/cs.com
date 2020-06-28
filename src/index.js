import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./Style.scss";
import csdata from './Csdata.js';

 
ReactDOM.render(
  <Main csdata={csdata}/>,
  document.getElementById("root")
);