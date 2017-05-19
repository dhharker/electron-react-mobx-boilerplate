import { observer } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import getStore from './store';
const store = getStore();

import {
  Home,
  Settings
} from './routes'

class App extends React.Component {
  @observer render() {
    console.log("App render observer");
    return (store.isReady) ? this.renderApp() : this.renderLoading();
  };

  renderLoading() {
    return (<div>Loading...</div>);
  };

  renderApp() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
          </div>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/settings" component={Settings}/>
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
