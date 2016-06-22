import todosReducer from './todosReducer';
import visibilityReducer from './visibilityReducer';
import completedTodosReducer from './completedTodosReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityReducer,
    completedTodos: completedTodosReducer
});
