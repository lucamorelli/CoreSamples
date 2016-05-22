"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var AboutView = (function (_super) {
    __extends(AboutView, _super);
    function AboutView(props) {
        _super.call(this, props);
        this.state = { loaded: false };
    }
    AboutView.prototype.componentDidMount = function () {
        this.setState({ loaded: true });
    };
    AboutView.prototype.render = function () {
        var loading = this.state.loaded ? "" : " (loading...)";
        return React.createElement("div", null, React.createElement("h2", null, "About ", loading), React.createElement("p", null, "This project includes a working example of React, React Router, and TypeScript." + ' ' + "It is ", React.createElement("a", {href: "https://github.com/toddlucas/react-tsx-starter"}, "hosted on Github"), "."));
    };
    return AboutView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutView;
