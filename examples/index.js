import creator from './stores';
import { addTodo } from './actions';

const store = creator();

store.subscribe(() => {
    const state = store.getState();

    console.dir(state);
});

store.dispatch(addTodo('Do stuff'));

