import { ADD_ABORTED } from '../actions/types';

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ABORTED:
            return action.payload;
    }

    return state;
};
