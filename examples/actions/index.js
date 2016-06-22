import { ADD_TODO, TOGGLE_VISIBILITY_FILTER, COMPLETE_TODO, INCOMPLETE_TODO, COMPLETE_ALL, INCOMPLETE_ALL } from './types';

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
        type: status ? COMPLETE_TODO : INCOMPLETE_TODO,
        payload: {
            todo
        }
    };
};

export var completeAll = (todos) => {
    return {
        type: COMPLETE_ALL,
        payload: todos
    };
};

export var incompleteAll = (todos) => {
    return {
        type: INCOMPLETE_ALL,
        payload: todos
    };
};
