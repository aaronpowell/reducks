import { ADD_TODO, TOGGLE_VISIBILITY_FILTER, UPDATE_TODO_STATUS, UPDATE_ALL } from '../actions/types';

const initialState = {
    visibilityFilter: false,
    todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: !state.visibilityFilter
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        name: action.payload,
                        completed: false
                    }
                ]
            };

        case UPDATE_TODO_STATUS:
            var todoIndex = state.todos.indexOf(action.payload.todo);
            if (!~todoIndex) {
                // todo doesn't actually exist
                return state;
            }

            var newTodo = {
                ...action.payload.todo,
                completed: action.payload.status
            };

            var todos = state.todos.splice(0, todoIndex).concat([newTodo]).concat(state.todos.splice(todoIndex));

            return {
                ...state,
                todos
            };

        case UPDATE_ALL:
            var toUpdate = state.todos.filter(t => t.completed !== action.payload).map(t => ({ ...t, completed: action.payload }));
            var noUpdate = state.todos.filter(t => t.completed === action.payload);

            return {
                ...state,
                todos: noUpdate.concat(toUpdate)
            };
    }

    return state;
};
