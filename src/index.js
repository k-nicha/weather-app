import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const app = document.getElementById('app')

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, app)