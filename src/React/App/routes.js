// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var App = require('./app.tsx');
var HomePage = require('./homePage.tsx');
var routes = (React.createElement(Route, {path: "/", component: App}, 
    React.createElement(IndexRoute, {component: HomePage})
));
module.exports = routes;
