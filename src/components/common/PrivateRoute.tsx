import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
  const isAuth = false;

  return (
    <Route
      {...rest}
      render={({ location }) => isAuth ? children : <Redirect to='/login' />}
    />
  );
};

export default PrivateRoute;
