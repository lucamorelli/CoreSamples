// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";

import React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

import App = require('./app.tsx');
import HomePage = require('./homePage.tsx');


var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
    </Route>
);

export = routes;