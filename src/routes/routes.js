import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/path'
import {
  Cadastro,
  Home,
  Login,
  Products,
  Cart,
  Admin
} from '../containers/index'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Cadastro} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />

        <PrivateRoute component={Admin} path={paths.Order} isAdmin={true} />
        <PrivateRoute component={Admin} path={paths.Products} isAdmin={true} />
        <PrivateRoute
          component={Admin}
          path={paths.NewProduct}
          isAdmin={true}
        />

        <PrivateRoute
          component={Admin}
          path={paths.EditProduct}
          isAdmin={true}
        />
      </Switch>
    </Router>
  )
}

export default Routes
