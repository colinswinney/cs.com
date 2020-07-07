import React, { Component } from "react"
import {
  NavLink,
} from "react-router-dom"
import $ from "jquery"

class Header extends Component {

  componentDidMount() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 1 ) {
          $('.navbar').addClass('cs-bg');
      } else {
          $('.navbar').removeClass('cs-bg');
      }
    });
  }

  render(props) {
    return (
      <div>
        <nav className={'navbar fixed-top justify-content-end'}>
          <ul className={'nav'}>
            {this.props.csdata['routes'].map((route, i) => (
            <li className={`nav-item ${route.contentClass}`} key={i}><NavLink className={"nav-link"} exact={route['exact']} to={route['path']}>{route['navTitle']}</NavLink></li>
          ))}
          </ul>
        </nav>
      </div>
    )
  }
}
 
export default Header;