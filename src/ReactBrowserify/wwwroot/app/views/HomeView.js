"use strict";
var React = require('react');
var react_router_1 = require('react-router');
var Hello_1 = require('../components/Hello');
var HomeView = React.createClass({
    getInitialState: function () {
        return { loaded: false };
    },
    componentDidMount: function () {
        this.setState({ loaded: true });
    },
    render: function () {
        var loading = this.state.loaded ? "" : " (loading...)";
        return React.createElement("div", null, React.createElement("h2", null, "HomeView ", loading), React.createElement(Hello_1.default, {name: "world"}), React.createElement("div", null, React.createElement(react_router_1.Link, {to: "/about"}, "About")));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeView;
