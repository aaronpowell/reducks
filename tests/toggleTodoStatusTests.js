import { addTodo, setTodoStatus } from '../examples/actions';
import { expect } from 'chai';
import creator from '../examples/stores';

export default {
    'should set status to complete': (createStore) => () => {
        const store = creator(createStore);
        const initialState = store.getState();
        const todo = 'this is a test todo';

        store.dispatch(addTodo(todo));

        let newState = store.getState();
        let addedTodo = newState.todos[0];

        store.dispatch(setTodoStatus(addedTodo, true));

        newState = store.getState();
        expect(newState.todos).to.be.length(1);
    },

    'should update only one todo': (createStore) => () => {
        const store = creator(createStore);
        const todo = 'this is a test todo';

        store.dispatch(addTodo('first'));
        store.dispatch(addTodo(todo));
        store.dispatch(addTodo('last'));

        let state = store.getState();

        let todoToComplete = state.todos.filter(t => t.name === todo)[0];

        store.dispatch(setTodoStatus(todoToComplete, true));

        let nextState = store.getState();

        expect(nextState.todos).to.be.length(3);
        expect(nextState.todos.filter(t => t.completed)).to.be.length(1);
        expect(nextState.todos.filter(t => !t.completed)).to.be.length(2);
    }
};
