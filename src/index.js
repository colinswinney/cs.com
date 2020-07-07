import './styles/_variables.scss';
import'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import "./styles/Style.scss";
import csdata from './Csdata.js';

 
ReactDOM.render(
  <Layout csdata={csdata}/>,
  document.getElementById("root")
);