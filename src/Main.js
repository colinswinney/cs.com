import React, { Component } from "react"
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter
} from "react-router-dom"
import { CSSTransition } from 'react-transition-group'
import NoMatch from "./NoMatch.js"

class Main extends Component {
  render(props) {
    return (
      <BrowserRouter>
        <div>

          <nav className={'navbar fixed-top justify-content-center'}>
            <ul className={'nav'}>
              {this.props.csdata['routes'].map((route, i) => (
              <li className={'nav-item'} key={i}><NavLink className={'nav-link'} exact={route['exact']} to={route['path']}>{route['navTitle']}</NavLink></li>
            ))}
            </ul>
          </nav>
          {this.props.csdata['routes'].map((route, { path, contentClass, Component }) => (
              <Route key={route.path} exact path={route.path} location={route.location}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="content"
                    unmountOnExit
                  >
                  <div className={`content ${route.contentClass}`}>
                    <h2 className="content-title">{route.title}</h2>
                    <div className="content-wrap">
                      <div className="content-inner">
                      <Switch>
                        <Route render={ () => <route.Component {...route}/>}/>
                      </Switch>
                      </div>
                    </div>
                  </div>
                  </CSSTransition>
                )}
              </Route>
          ))}
            
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;