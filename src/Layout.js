import React, { Component } from "react"
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom"
import { CSSTransition } from 'react-transition-group'
import Header from "./Header.js"
import Main from "./Main.js"
import ScrollToTop from "./Components/ScrollToTop.js"

class Layout extends Component {

  render(props) {
    return (
      <BrowserRouter>
        <div>
          {console.log(this)}
          <ScrollToTop />

          <Header {...this.props}/>

          <Main {...this.props}/>

        </div>
      </BrowserRouter>
    )
  }
}
 
export default Layout;