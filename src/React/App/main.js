// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var history = require('./history');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Routes = require('./routes.tsx');
ReactDOM.render((React.createElement(Router, {routes: Routes, history: history})), document.getElementById('app-container'));
var main_1 = require('./todo/main');
ReactDOM.render(React.createElement(main_1.Main), document.getElementById('todo-item'));
