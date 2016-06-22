import { ADD_TODO, COMPLETE_TODO, COMPLETE_ALL, INCOMPLETE_ALL } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload,
                    completed: false
                }
            ];

        case COMPLETE_TODO:
            var todoIndex = state.indexOf(action.payload.todo);
            if (!~todoIndex) {
                // todo doesn't actually exist
                return state;
            }

            var todos = state.slice(0, todoIndex).concat(state.slice(todoIndex + 1));

            return todos;

        case COMPLETE_ALL:
            return [];

        case INCOMPLETE_ALL:
            console.log('todoreducer');
            var todos = action.payload.map(todo => ({ ...todo, completed: false }));
            return state.concat(...todos);
    }

    return state;
};
