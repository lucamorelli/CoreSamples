"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var TodoTextInput_1 = require('./TodoTextInput');
;
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props, context) {
        _super.call(this, props, context);
        this.state = {
            editing: false
        };
    }
    TodoItem.prototype.handleDoubleClick = function () {
        this.setState({ editing: true });
    };
    TodoItem.prototype.handleSave = function (todo, text) {
        if (text.length === 0) {
            this.props.deleteTodo(todo);
        }
        else {
            this.props.editTodo(todo, text);
        }
        this.setState({ editing: false });
    };
    TodoItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, todo = _a.todo, completeTodo = _a.completeTodo, deleteTodo = _a.deleteTodo;
        var element;
        if (this.state.editing) {
            element = (React.createElement(TodoTextInput_1.default, {text: todo.text, editing: this.state.editing, onSave: function (text) { return _this.handleSave(todo, text); }}));
        }
        else {
            element = (React.createElement("div", {className: "view"}, 
                React.createElement("input", {className: "toggle", type: "checkbox", checked: todo.completed, onChange: function () { return completeTodo(todo); }}), 
                React.createElement("label", {onDoubleClick: this.handleDoubleClick.bind(this)}, todo.text), 
                React.createElement("button", {className: "destroy", onClick: function () { return deleteTodo(todo); }})));
        }
        return (React.createElement("li", {className: classNames({
            completed: todo.completed,
            editing: this.state.editing
        })}, element));
    };
    return TodoItem;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoItem;
//# sourceMappingURL=TodoItem.js.map