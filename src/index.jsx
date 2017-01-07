import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import Header from './components/header.component';
import Test from './components/test.component';

import '../style/main.scss';

const App = (props) => {

    return(
        <div className="app">
            <Header/>
            <Link to="/">Home</Link> &nbsp; <Link to="test">Test Route</Link>
            {props.children}
        </div>
    )
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="test" component={Test}></Route>
        </Route>
    </Router>
, document.querySelector('.container'));
