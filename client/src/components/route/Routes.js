import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import MapPage from '../MapPage/MapPage';
import Alert from '../Layout/Alert';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <PrivateRoute exact path='/hub' component={MapPage} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
