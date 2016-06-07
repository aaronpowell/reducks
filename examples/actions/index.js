import { ADD_TODO, TOGGLE_VISIBILITY_FILTER, UPDATE_TODO_STATUS, UPDATE_ALL } from './types';

export var addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export var setVisibility = () => {
    return {
        type: TOGGLE_VISIBILITY_FILTER
    };
};

export var setTodoStatus = (todo, status) => {
    return {
        type: UPDATE_TODO_STATUS,
        payload: {
            todo,
            status
        }
    };
};

export var updateAll = (newState) => {
    return {
        type: UPDATE_ALL,
        payload: newState
    };
};
