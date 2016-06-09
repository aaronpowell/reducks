const INIT_ACTION = 'reducks/@@INIT';

export default (reducer) => {
    let state;
    let currentSubscriptions = [];
    let nextSubscriptions = currentSubscriptions;

    const ensureCanMutateNextListeners = function () {
        if (nextSubscriptions === currentSubscriptions) {
            nextSubscriptions = currentSubscriptions.slice();
        }
    };

    const subscribe = function (fn) {
        if (typeof fn !== 'function') {
            throw Error('The provided listener must be a function');
        }

        var subscribed = true;
        ensureCanMutateNextListeners();
        nextSubscriptions.push(fn);

        return function () {
            if (!subscribed) {
                return;
            }

            ensureCanMutateNextListeners();
            var index = nextSubscriptions.indexOf(fn);
            nextSubscriptions.splice(index, 1);
            subscribed = false;
        };
    };

    const dispatch = function (action) {
        if (typeof action.type === 'undefined') {
            throw Error('A `type` is required for an action');
        }

        state = reducer(state, action);

        var subscriptions = currentSubscriptions = nextSubscriptions;

        subscriptions.forEach(fn => fn());

        return action;
    };

    let getState = function () {
        return state;
    };

    dispatch({ type: INIT_ACTION });

    return {
        dispatch,
        getState,
        subscribe
    };
};
