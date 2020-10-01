import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './components/route/Routes';
import Logo from './components/Layout/Logo';
// import MainPage from './components/MainPage/MainPage';
// import MapPage from './components/MapPage/MapPage';
// import PrivateRoute from './components/route/PrivateRoute';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Logo>
        <BrowserRouter>
          <Route component={Routes} />
        </BrowserRouter>
      </Logo>
    </Provider>
  );
};

export default App;
