export default function (reducers) {
    var keys = Object.keys(reducers);

    return function (state = {}, action) {
        return keys.reduce((newState, key) => {
            var reducer = reducers[key];
            var currentState = state[key];

            newState[key] = reducer(currentState, action);
            return newState;
        }, {});
    };
};
