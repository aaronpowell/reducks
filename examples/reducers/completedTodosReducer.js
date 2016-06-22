import { COMPLETE_TODO, COMPLETE_ALL, INCOMPLETE_ALL } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE_TODO:
            var newTodo = {
                ...action.payload.todo,
                completed: true
            };

            var todos = state.concat([newTodo]);

            return todos;

        case COMPLETE_ALL:
            var newlyCompleted = action.payload.map(todo => ({ ...todo, completed: true }));
            return state.concat(newlyCompleted);

        case INCOMPLETE_ALL:
            return [];
    }

    return state;
};
