import compose from './compose';

export default (...middlewares) => {
    return (createStore) => (reducer, initialState) => {
        const store = createStore(reducer, initialState);
        var dispatch = store.dispatch;

        var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
        };

        var chain = middlewares.map(m => m(middlewareAPI));
        dispatch = compose(...chain)(store.dispatch);

        return { ...store, dispatch };
    };
};
