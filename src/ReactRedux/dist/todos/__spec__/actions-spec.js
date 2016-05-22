"use strict";
var chai_1 = require('chai');
var actions = require('../actions');
describe('actions', function () {
    it('creates new todo', function () {
        var todo = actions.addTodo('hello').payload;
        chai_1.expect(todo.text).to.eql('hello');
    });
    it('deletes todo', function () {
        var todo = actions.deleteTodo({
            id: 999,
            text: '',
            completed: false
        }).payload;
        chai_1.expect(todo.id).to.eql(999);
    });
    it('edits todo', function () {
        var todo = actions.editTodo({
            id: 999,
            text: 'hi',
            completed: false
        }, 'bye').payload;
        chai_1.expect(todo).to.eql({ id: 999, text: 'bye', completed: false });
    });
    it('completes todo', function () {
        var todo = actions.completeTodo({
            id: 999,
            text: '',
            completed: false
        }).payload;
        chai_1.expect(todo.id).to.eql(999);
    });
});
//# sourceMappingURL=actions-spec.js.map