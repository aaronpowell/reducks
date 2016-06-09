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
    }
};
