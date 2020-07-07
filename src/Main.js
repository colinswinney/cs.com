import React, { Component } from "react"
import {
  Route,
  Switch,
} from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

class Main extends Component {

	render(props) {
		return (
			<div>
			{this.props.csdata['routes'].map((route, i) => (
        <Route key={i} exact path={route.path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="cs-page"
              unmountOnExit
            >
            
              <Switch>
                <Route render={ () => <route.Component {...route}/> }/>
              </Switch>
                
            </CSSTransition>
          )}
        </Route>
      ))}
      </div>
		)
	}
}

export default Main;