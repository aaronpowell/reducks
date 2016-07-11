import todoApp from '../reducers';
import { applyMiddleware } from 'redux';
import { notEmptyValidator } from './validationMiddleware';

export default (createStore, combineReducers) => createStore(todoApp(combineReducers), applyMiddleware(notEmptyValidator));
