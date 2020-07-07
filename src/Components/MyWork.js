import React, { useState, Component } from "react";
import $ from "jquery"
import { ReactComponent as ManScreaming } from "../assets/man-screaming-transparent.svg"
import { ReactComponent as LinnemansLogo } from "../assets/linnemans.svg"
import { ReactComponent as TippecanoeLogo } from "../assets/tippecanoe.svg"

import Linnemans from "../Components/MyWork/Linnemans"
import Dusty from "../Components/MyWork/Dusty"

class MyWork extends Component {

  componentDidMount() {
    var $el = $(".my-work .cs-content-title"), text = $el.text(),
        words = text.split(" "), html = "";

    for (var i = 0; i < words.length; i++) {
        html += "<span>" + words[i] + "</span>";
    }

    $el.html(html).children().hide().each(function(i){
      $(this).delay(250).delay(i*150).fadeIn(50);
    });

    
  }

  render(...props) {

    return (
      <div className={`cs-page ${this.props.contentClass}`}>
      {console.log(this)}
        <div className="cs-content-header">
          <ManScreaming />
          <div className="cs-content-header-inner">
            <h2 className="cs-content-title">{this.props.title}</h2>
          </div>
        </div>
        <div className="cs-content-main">
          <Dusty />
        </div>
      </div>
    );
  }
}
 
export default MyWork;