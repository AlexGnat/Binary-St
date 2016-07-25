import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import About from './components/about'
/* import Demo from './components/demo/demo.js'
import Noname from './components/noname.js' */
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About} />
        </Route>
    </Router>)
    , document.getElementById('root')
);
