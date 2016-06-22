import todoApp from '../reducers';

export default (createStore, combineReducers) => createStore(todoApp(combineReducers));
