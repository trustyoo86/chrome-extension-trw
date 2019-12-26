import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import Login from 'containers/Login';
import Private from 'containers/Private';
import Test from 'containers/Test';
import PrivateRoute from 'components/common/PrivateRoute';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/test' component={Test} />
        <PrivateRoute path='/private'>
          <Private />
        </PrivateRoute>
        <Redirect from='/' to='/private' />
      </Switch>
    </Router>
  );
};

export default Main;
