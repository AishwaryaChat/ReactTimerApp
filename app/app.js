const React = require('react')
const ReactDOM = require('react-dom')
import Main from 'Main'
import applicationStyles from 'applicationStyles'

// object de-structuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

{ /* history prop tells react that we want to route '#' sign followed by the path, in order to maintain routes for our app */ }
{ /* Route is used to create paths for different components */ }
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
)
