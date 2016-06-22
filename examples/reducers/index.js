import todosReducer from './todosReducer';
import visibilityReducer from './visibilityReducer';
import completedTodosReducer from './completedTodosReducer';

export default (combineReducers) => combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityReducer,
    completedTodos: completedTodosReducer
});
