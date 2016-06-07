import visibilityFilterTests from './visibilityFilterTests';
import addTodoTests from './addTodoTests';
import * as redux from 'redux';

describe('set visibility filter', () => {
    describe('redux', () =>
        Object.keys(visibilityFilterTests).map(key => it(key, visibilityFilterTests[key](redux.createStore)))
    );
});

describe('adding todos', () => {
    describe('redux', () =>
        Object.keys(addTodoTests).map(key => it(key, addTodoTests[key](redux.createStore)))
    );
});
