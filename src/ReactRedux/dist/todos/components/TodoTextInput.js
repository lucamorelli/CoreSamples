"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var TodoTextInput = (function (_super) {
    __extends(TodoTextInput, _super);
    function TodoTextInput(props, context) {
        _super.call(this, props, context);
        this.state = {
            text: this.props.text || ''
        };
    }
    TodoTextInput.prototype.handleSubmit = function (e) {
        var text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    };
    TodoTextInput.prototype.handleChange = function (e) {
        this.setState({ text: e.target.value });
    };
    TodoTextInput.prototype.handleBlur = function (e) {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    };
    TodoTextInput.prototype.render = function () {
        return (React.createElement("input", {className: classNames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
        }), type: "text", placeholder: this.props.placeholder, autoFocus: true, value: this.state.text, onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), onKeyDown: this.handleSubmit.bind(this)}));
    };
    return TodoTextInput;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoTextInput;
//# sourceMappingURL=TodoTextInput.js.map