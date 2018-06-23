import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import Home from './components/Home.js';
import { createBrowserHistory } from 'history';

const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(browserHistory)));
const appHistory = syncHistoryWithStore(createBrowserHistory(), store);

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={appHistory}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
