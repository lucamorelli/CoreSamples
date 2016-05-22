// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";

import React = require('react');

var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var history = require('./history');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Route = Router.Route;
var IndexRoute = Router.IndexRoute; 

import Routes = require('./routes.tsx');

ReactDOM.render((
    <Router routes={Routes} history={history} />
), document.getElementById('app-container'));

import {Main} from './todo/main';
ReactDOM.render(React.createElement(Main), document.getElementById('todo-item'));