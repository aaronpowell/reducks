import { ADD_TODO, SET_VISIBILITY_FILTER } from './types';

export var addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export var setVisibility = (visibility) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: visibility
    };
};
