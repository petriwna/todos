import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import { store } from './store';

const Main = loadable(() => import('./pages/Main/Main'));
const Editor = loadable(() => import('./pages/Editor/Editor'));
const Login = loadable(() => import('./pages/auth/Login/Login'));
const Registration = loadable(() => import('./pages/auth/Registration/Registration'));
const ConfirmEmail = loadable(() => import('./pages/auth/ConfirmEmail/ConfirmEmail'));

function NotFound() {
  return <h2>NotFound</h2>;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/editor/:noteId" component={Editor} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/confirm/:token" component={ConfirmEmail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
