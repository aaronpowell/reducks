import { TOGGLE_VISIBILITY_FILTER } from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case TOGGLE_VISIBILITY_FILTER:
            return !state;
    }

    return state;
};
