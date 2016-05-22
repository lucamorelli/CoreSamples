"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var NotFoundView = (function (_super) {
    __extends(NotFoundView, _super);
    function NotFoundView() {
        _super.apply(this, arguments);
    }
    NotFoundView.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h2", null, "404"), React.createElement("h3", null, "Page not found"));
    };
    return NotFoundView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFoundView;
//# sourceMappingURL=NotFoundView.js.map