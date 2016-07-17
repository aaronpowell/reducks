import todoApp from '../reducers';
import { notEmptyValidator } from './validationMiddleware';

export default (createStore, combineReducers, applyMiddleware) => createStore(todoApp(combineReducers), applyMiddleware(notEmptyValidator));
