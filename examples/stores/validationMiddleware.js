import { ADD_TODO, ADD_ABORTED } from '../actions/types';

export const notEmptyValidator = (store) => (next) => (action) => {
    if (action.type === ADD_TODO && (!action.payload || !action.payload.trim())) {
        return store.dispatch({
            type: ADD_ABORTED,
            payload: 'The name of the todo cannot be empty or a blank string'
        });
    }

    return next(action);
};
