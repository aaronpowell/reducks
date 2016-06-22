import { addTodo } from '../examples/actions';
import { expect } from 'chai';
import creator from '../examples/stores';

export default {
    'should add a todo that is provided':  (createStore, combineReducers) => (done) => {
        const store = creator(createStore, combineReducers);
        const initialState = store.getState();
        const todo = 'this is a test todo';

        store.subscribe(() => {
            const nextState = store.getState();

            expect(nextState.todos.filter(t => t.name === todo)).to.be.length(1);
            expect(initialState.todos.filter(t => t.name === todo)).to.be.length(0);
            done();
        });

        store.dispatch(addTodo(todo));
    }
};
