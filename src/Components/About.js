import React, { Component } from "react";
import { ReactComponent as Guitar} from "../assets/guitar-final.svg"
import { ReactComponent as WordPress} from "../assets/wordpress.svg"
import { ReactComponent as Shopify} from "../assets/shopify.svg"
import { ReactComponent as ReactIcon} from "../assets/react.svg"
import { ReactComponent as CreativeCloud} from "../assets/creative-cloud.svg"
import { ReactComponent as Affinity} from "../assets/affinity.svg"

function Card({children, ...rest}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

 
class About extends Component {
  render(...props) {
    return (
      <div className={`cs-page ${this.props.contentClass}`}>
        {console.log(this)}
        <div className="cs-content-header">
          <div className="cs-content-header-inner">
            <h2 className="cs-content-title">{this.props.title}</h2>
            <Guitar />
          </div>
        </div>
        <div className="cs-content-main">
            <h2 className="text-center">My Work</h2>
            {/* <div className="container">
              <div className="row text-center">
                <div className="col-2 offset-1">
                  <WordPress />
                  <h5>WordPress</h5>
                </div>
                <div className="col-2">
                  <Shopify />
                  <h5>Shopify</h5>
                </div>
                <div className="col-2">
                  <ReactIcon />
                  <h5>React</h5>
                </div>
                <div className="col-2">
                  <CreativeCloud />
                  <h5>Adobe CC</h5>
                </div>
                <div className="col-2">
                  <Affinity />
                  <h5>Affinity</h5>
                </div>
              </div>
            </div>   */}
            <div className="card-columns">
              <Card className="wordpress" children={<WordPress />, <div children="test" />}/>
              <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card bg-primary text-white text-center p-3">
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                  <footer className="blockquote-footer">
                    <small>
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img" src="..." alt="Card image" />
              </div>
              <div className="card p-3 text-right">
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
      </div>  
    );
  }
}
 
export default About;