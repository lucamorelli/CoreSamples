"use strict";
var chai_1 = require('chai');
var reducer_1 = require('../reducer');
var actions_1 = require('../actions');
describe('todo reducer', function () {
    it('handles add', function () {
        var state = [{ id: 0, text: '', completed: true }];
        state = reducer_1.default(state, {
            type: actions_1.ADD_TODO,
            payload: { text: 'hello', completed: false }
        });
        chai_1.expect(state[0]).to.eql({ id: 1, text: 'hello', completed: false });
    });
    it('handles delete', function () {
        var state = [{ id: 1, text: '', completed: false }];
        state = reducer_1.default(state, {
            type: actions_1.DELETE_TODO,
            payload: { id: 1 }
        });
        chai_1.expect(state).to.eql([]);
    });
    it('handles edit', function () {
        var state = [{ id: 1, text: '', completed: false }];
        state = reducer_1.default(state, {
            type: actions_1.EDIT_TODO,
            payload: { id: 1, text: 'hello' }
        });
        chai_1.expect(state[0]).to.eql({ id: 1, text: 'hello', completed: false });
    });
    it('handles complete all', function () {
        var state = [
            { id: 1, text: '', completed: false }
        ];
        state = reducer_1.default(state, {
            type: actions_1.COMPLETE_TODO,
            payload: { id: 1 }
        });
        chai_1.expect(state[0]).to.eql({ id: 1, text: '', completed: true });
    });
    it('handles complete all', function () {
        var state = [
            { id: 1, text: '', completed: false },
            { id: 2, text: '', completed: true },
            { id: 3, text: '', completed: false }
        ];
        state = reducer_1.default(state, {
            type: actions_1.COMPLETE_ALL,
            payload: {}
        });
        chai_1.expect(state).to.eql([
            { id: 1, text: '', completed: true },
            { id: 2, text: '', completed: true },
            { id: 3, text: '', completed: true }
        ]);
        state = reducer_1.default(state, {
            type: actions_1.COMPLETE_ALL,
            payload: {}
        });
        chai_1.expect(state).to.eql([
            { id: 1, text: '', completed: false },
            { id: 2, text: '', completed: false },
            { id: 3, text: '', completed: false }
        ]);
    });
    it('handles clear completed', function () {
        var state = [
            { id: 1, text: '', completed: false },
            { id: 2, text: '', completed: true }
        ];
        state = reducer_1.default(state, {
            type: actions_1.CLEAR_COMPLETED,
            payload: {}
        });
        chai_1.expect(state).to.eql([
            { id: 1, text: '', completed: false }
        ]);
    });
});
//# sourceMappingURL=reducer-spec.js.map