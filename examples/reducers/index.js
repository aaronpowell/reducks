import { ADD_TODO, SET_VISIBILITY_FILTER } from '../actions/types';

const initialState = {
    visibilityFilter: true,
    todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.payload
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };
    }

    return state;
};
