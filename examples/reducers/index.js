import todosReducer from './todosReducer';
import visibilityReducer from './visibilityReducer';
import completedTodosReducer from './completedTodosReducer';
import errorHandleReducer from './errorHandleReducer';

export default (combineReducers) => combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityReducer,
    completedTodos: completedTodosReducer,
    error: errorHandleReducer
});
