"use strict";
var React = require('react');
var react_router_1 = require('react-router');
var AppFrame_1 = require('./views/AppFrame');
var NotFoundView_1 = require('./views/NotFoundView');
var HomeView_1 = require('./views/HomeView');
var AboutView_1 = require('./views/AboutView');
var routeMap = (React.createElement(react_router_1.Route, {path: "/", component: AppFrame_1.default}, React.createElement(react_router_1.IndexRoute, {component: HomeView_1.default}), React.createElement(react_router_1.Route, {path: "/about", component: AboutView_1.default}), React.createElement(react_router_1.Route, {path: "*", component: NotFoundView_1.default})));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeMap;
//# sourceMappingURL=routes.js.map